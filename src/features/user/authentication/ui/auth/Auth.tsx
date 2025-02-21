'use client';
import { useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import styles from './Auth.module.scss';
import { useAuthRedirect } from '@/features/user/authentication/ui/auth/useAuthRedirect';
import { Button } from '@/shared/ui/form-elements/Button';
import {
  useLoginMutation,
  useRegisterMutation,
} from '@/entities/user/api/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/entities/user/model/userSlice';
import { Field } from '@/shared/ui/form-elements/Field';
import { validEmail } from '@/shared/regex';

interface IAuthInput {
  email: string;
  password: string;
}

export const Auth = () => {
  useAuthRedirect();
  const dispatch = useDispatch();
  const [type, setType] = useState<'login' | 'register'>('login');
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterMutation();
  const [loginUser, { isLoading: isLoginLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthInput>({
    mode: 'onChange',
  });

  const handleRegistration = async (data: IAuthInput) => {
    try {
      const response = await registerUser(data).unwrap();
      if (response.accessToken) {
        localStorage.setItem('access_token', response.accessToken);
        dispatch(setUser({ accessToken: response.accessToken }));
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  const handleLogIn = async (data: IAuthInput) => {
    try {
      const response = await loginUser(data).unwrap();
      if (response.accessToken != undefined) {
        localStorage.setItem('access_token', response.accessToken);
        dispatch(setUser({ access_token: response.accessToken }));
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const onSubmit = (data: IAuthInput) => {
    if (type === 'register') {
      handleRegistration(data);
    } else {
      handleLogIn(data);
    }
  };

  return (
    <div className={styles.auth}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.error}></div>

        <Field
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: validEmail,
              message: 'Please enter a valid email address',
            },
          })}
          name="email"
          placeholder=""
          error={errors.email as FieldError}
        />

        <Field
          {...register('password', {
            required: type === 'register' ? 'Password is required' : false,
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          name="password"
          placeholder=""
          error={errors.password as FieldError}
        />

        <div className={styles.buttons}>
          <Button
            type="submit"
            onClick={() => setType('login')}
            disabled={!isValid || isLoginLoading}
          >
            Login
          </Button>

          <Button
            type="submit"
            onClick={() => setType('register')}
            disabled={!isValid || isRegisterLoading}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
