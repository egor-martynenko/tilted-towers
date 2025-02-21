import { api } from '@/app/api';
import { MessageModel } from '@/entities/message/model/message.type';

export const messageApi = api.injectEndpoints({
  endpoints: builder => ({
    sendMessage: builder.mutation<
      MessageModel,
      {
        chatId: string;
        senderId: string;
        receiverId: string;
        content: string;
      }
    >({
      query: body => ({
        url: 'message/send',
        method: 'POST',
        body,
      }),
    }),
    getMessagesByChat: builder.query<MessageModel[], string>({
      query: chatId => `message/chat/${chatId}`,
    }),
    markMessageAsRead: builder.mutation<MessageModel, { messageId: string }>({
      query: body => ({
        url: 'message/mark-as-read',
        method: 'POST',
        body,
      }),
    }),
  }),
});
export const {
  useSendMessageMutation,
  useGetMessagesByChatQuery,
  useMarkMessageAsReadMutation,
} = messageApi;
