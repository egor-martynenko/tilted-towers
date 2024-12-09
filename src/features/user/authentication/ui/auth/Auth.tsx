"use client"
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Auth.module.scss';

import { useAuthRedirect } from '@/features/user/authentication/ui/auth/useAuthRedirect';
import { useAuth } from '@/shared/hooks/useAuth';
import { IAuthInput } from '@/features/user/authentication/model/auth.interface';
import { Button } from '@/shared/ui/form-elements/Button';
import AuthFields from '@/features/user/authentication/ui/auth/AuthFields';
import { useActions } from '@/shared/hooks/useActions';
import { useSelector } from 'react-redux';
import { TypeRootState } from '@/store/store';


export const Auth = () => {
  const [type, setType] = useState<'login' | 'register'>('login');
  useAuthRedirect()
  const {isLoading} = useAuth()

  const {register:RegisterInput, handleSubmit, formState, reset} = useForm<IAuthInput>({
    mode: 'onChange',
  })

  const {login, register} = useActions()

  const error = useSelector((state: TypeRootState) => state.user.error);


  const onSubmit:SubmitHandler<IAuthInput> = (data) => {
    if(type === 'register') register(data)
    else if (type === 'login') login(data)

    reset()
  }

  return (
    <div className={styles.auth}>
      <form className={styles.form}  onSubmit={handleSubmit(onSubmit)}>
        {error && <div className={styles.error}>{error}</div>}
        <AuthFields register={RegisterInput} formState={formState} isPasswordRequired={true}/>

        <div className={styles.buttons}>

          <Button
            type="submit"
            onClick={()=>setType('login')}
            disabled={isLoading}
          >Login</Button>

          <Button
            type="submit"
            onClick={()=>setType('register')}
            disabled={isLoading}
          >Register</Button>
        </div>

      </form>
    </div>
  );
};