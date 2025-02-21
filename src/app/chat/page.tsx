'use client';
import Heading from '@/shared/ui/Heading';
import { UserChat } from '@/widgets/Chat/UserChat';
import { useSelector } from 'react-redux';
import { selectUser } from '@/entities/user/model/userSlice';
import { AdminChat } from '@/widgets/Chat/AdminChat';

export default function chatPage() {
  const user = useSelector(selectUser);

  return (
    <section>
      <Heading title={'СhatPage'} />
      {user?.isAdmin ? (
        <AdminChat adminId={user?._id as string} />
      ) : (
        <UserChat userId={user?._id as string} />
      )}
    </section>
  );
}
