import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import { TMaterialIconName } from '@/shared/types/icon.types';

export const MaterialIcon: FC<{ name: TMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  // @ts-ignore
  return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
