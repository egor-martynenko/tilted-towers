import { FC } from 'react';
import { FieldError, FormState, UseFormRegister } from 'react-hook-form';
import { Field } from '@/shared/ui/form-elements/Field';
import { validEmail } from '@/shared/regex';

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired: boolean
}

const AuthFields: FC<IAuthFields>= ({register, formState : {errors}, isPasswordRequired}) => {
  return (
    <>
      <Field {...register('email', {
        required: 'Email is required',
        pattern: {
          value: validEmail,
          message: 'Please enter a valid email address'
        }
      })} name={'email'} placeholder={''} error={errors.email as FieldError}/>

      <Field {...register('password', isPasswordRequired ? {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Min length should more 6 symbols'
        }
      } : {})} name={'password'} placeholder={''} error={errors.password as FieldError}/>
    </>
  );
};

export default AuthFields;