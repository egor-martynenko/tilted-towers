'use client';
import styles from './Chat.module.scss';
import { FC, useEffect, useState } from 'react';
import { ChatGroup } from '@/widgets/Chat/ChatGroup';
import { useGetUserChatQuery } from '@/entities/chat/api/chatApi';
type UserChatProps = {
  userId: string;
};
export const UserChat: FC<UserChatProps> = ({ userId }) => {
  const [chatId, setChatId] = useState('');
  const { data: userChat, refetch: refetchChat } = useGetUserChatQuery(userId, {
    skip: userId === undefined,
  });

  useEffect(() => {
    userChat && setChatId(userChat._id);
  }, [userChat]);

  return (
    <div className={styles.chatWrapper}>
      {userChat ? (
        <ChatGroup
          chat={userChat}
          userId={userId}
          receiverId={userChat?.admin as string}
          refetchChat={refetchChat}
        />
      ) : (
        <div className={styles.createChat}>
          <div className={styles.createChatCTA}>Начните чат</div>
          <button className={styles.createChatCTA_btn}>Create Chat</button>
        </div>
      )}
    </div>
  );
};
