import { MessageModel } from '@/entities/message/model/message.type';

export interface ChatModel {
  _id: string;
  user: string;
  admin: string | null;
  messages: MessageModel[];
  status: 'active' | 'closed';
  createdAt: string;
}
