import { api } from '@/app/api';
import { ChatModel } from '@/entities/chat/model/chat.types';
import { MessageModel } from '@/entities/message/model/message.type';

type Message = {
  _id: string;
  createdAt: string;
  sender: {
    _id: string;
    email: string;
  };
  receiver: {
    _id: string;
    email: string;
  };
  content: string;
  isRead: boolean;
  updatedAt: string;
};

export const chatApi = api.injectEndpoints({
  endpoints: builder => ({
    createChat: builder.mutation<
      ChatModel,
      { userId: string; adminId: string }
    >({
      query: body => ({
        url: 'chat/create',
        method: 'POST',
        body,
      }),
    }),

    getUserChat: builder.query<ChatModel, string>({
      query: userId => `chat/${userId}`,
    }),

    getChatMessages: builder.query<Message[], string>({
      query: chatId => `chat/${chatId}/messages`,
    }),
    closeChat: builder.mutation<ChatModel, string>({
      query: chatId => ({
        url: `chat/${chatId}/close`,
        method: 'PATCH',
      }),
    }),
    reassignChat: builder.mutation<ChatModel, string>({
      query: chatId => ({
        url: `chat/${chatId}/reassign`,
        method: 'PATCH',
      }),
    }),
    getAdminChats: builder.query<ChatModel[], string>({
      query: adminId => `chat/admin/${adminId}`,
    }),
  }),
});
export const {
  useCreateChatMutation,
  useGetChatMessagesQuery,
  useGetUserChatQuery,
  useCloseChatMutation,
  useReassignChatMutation,
  useGetAdminChatsQuery,
} = chatApi;
