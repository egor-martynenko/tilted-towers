import React, { FC, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from '@/widgets/Chat/Chat.module.scss';
import SocketApi from '@/entities/chat/api/socket-api';
import { useSendMessageMutation } from '@/entities/message/api/messageApi';
import { MessageModel } from '@/entities/message/model/message.type';
import { ChatModel } from '@/entities/chat/model/chat.types';

type SentMessage = {
  senderId: string;
  receiverId: string;
  content: string;
  chatId: string;
};

type ChatGroupProps = {
  chat: ChatModel;
  userId: string;
  receiverId: string;
  refetchChat: () => void;
};

export const ChatGroup: FC<ChatGroupProps> = ({
  chat,
  userId,
  receiverId,
  refetchChat,
}) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<MessageModel[]>(chat.messages);
  const [sendMessage] = useSendMessageMutation();

  // Реф для последнего сообщения
  const lastMessageRef = useRef<HTMLLIElement | null>(null);

  // Прокрутка к последнему сообщению при обновлении сообщений
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;

    const messageData: SentMessage = {
      senderId: userId,
      receiverId,
      content: text,
      chatId: chat._id,
    };

    try {
      // Отправка сообщения через WebSocket
      SocketApi.getInstance()?.emit('send-message', messageData);

      // Отправка сообщения через API
      await sendMessage(messageData).unwrap();
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    } finally {
      setText('');
      refetchChat();
    }
  };

  useEffect(() => {
    const socket = SocketApi.connect(userId);

    socket.on('send-message', (newMessage: MessageModel) => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
      refetchChat();
    });

    return () => {
      socket?.off('send-message');
      SocketApi.disconnect();
    };
  }, [userId]);

  useEffect(() => {
    setMessages(chat.messages);
    refetchChat();
  }, [chat.messages]);

  return (
    <div className={styles.chatGroup}>
      <p className={styles.chatId}>ChatID: {chat._id}</p>
      <ul className={styles.messagesList}>
        {messages.map((message, index) => (
          <li
            ref={index === messages.length - 1 ? lastMessageRef : null} // Привязываем реф к последнему сообщению
            className={clsx(styles.message, {
              [styles.senderMessage]: message.sender === userId,
              [styles.receiverMessage]: message.sender !== userId,
            })}
            key={`${message._id}-${index}`}
          >
            <p>{message.content}</p>
            <small>{new Date(message.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      <div className={styles.messageGroup}>
        <input
          className={styles.messageInput}
          type="text"
          placeholder="Enter your message"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className={styles.messageBtn} onClick={handleSend}>
          SEND
        </button>
      </div>
    </div>
  );
};
