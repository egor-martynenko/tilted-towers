import React, { FC, useEffect, useState } from 'react';
import { ChatGroup } from '@/widgets/Chat/ChatGroup';
import styles from '@/widgets/Chat/Chat.module.scss';
import { useGetAdminChatsQuery } from '@/entities/chat/api/chatApi';

type AdminChatAdminChatProps = {
  adminId: string;
};
export const AdminChat: FC<AdminChatAdminChatProps> = ({ adminId }) => {
  const [chatId, setChatId] = useState('');

  const { data: adminChats, refetch: refetchChat } = useGetAdminChatsQuery(
    adminId,
    {
      skip: adminId === undefined,
    },
  );

  useEffect(() => {
    adminChats !== undefined && setChatId(adminChats?.[0]._id);
  }, [adminChats]);

  return (
    <div>
      {adminChats?.[0]._id ? (
        <ChatGroup
          chat={adminChats?.[0]}
          userId={adminId}
          receiverId={adminChats?.[0].user}
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
