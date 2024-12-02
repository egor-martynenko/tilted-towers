import styles from './form.module.scss'
import { forwardRef } from 'react';
import cn from 'classnames'
import { IField } from '@/shared/ui/form-elements/form.interface';

export const Field = forwardRef<HTMLInputElement, IField>(({name ,error, type = 'text', style, ...rest}, ref) => {
  return (
    <div
      className={cn('relative z-0 w-full mb-5 group', styles.common, styles.field)}
      style={style}
    >
      <input
        name={name}
        ref={ref}
        type={type}
        className={'block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer'}
        {...rest} />
      <label
        htmlFor={name}
        className={'peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:z-50 peer-focus:scale-75 peer-focus:-translate-y-6'}
      >{name}</label>
      {error && <div className={styles.error}>{error.message}</div>}
    </div>)
})

Field.displayName = 'Field'