import { FC, ReactNode } from 'react';
import styles from './form.module.scss'
import { IButton } from '@/shared/ui/form-elements/form.interface';
import cn from 'classnames';

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button  className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
