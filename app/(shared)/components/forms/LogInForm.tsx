'use client';

import React, { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LogInFormProps } from '@/types/FormProps';
import Input from './elements/Input';
import { LogInFormValues } from './formConstants';
import { signIn } from 'next-auth/react';

function LogInForm({ handleSubmitForm }: LogInFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<LogInFormValues>();

  const onSubmit: SubmitHandler<LogInFormValues> = async (data) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: '/',
      });
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row g-3'>
        <div className='form-floating row-sm-6 mb-2'>
          <Input
            fieldId='email'
            fieldType='email'
            fieldLabelText='אימייל'
            showError={errors.email ?? undefined}
            rest={{
              ...register('email', {
                required: 'שדה חובה',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'הכנס אימייל בפורמט חוקי',
                },
              }),
            }}
            errors={errors}
          />
        </div>
        <div className='form-floating row-sm-6 mb-2'>
          <Input
            fieldId='password'
            fieldType='password'
            fieldLabelText='סיסמא'
            showError={errors.password ?? undefined}
            errors={errors}
            rest={{
              ...register('password', {
                required: 'שדה חובה',
                minLength: {
                  value: 5,
                  message: 'סיסמא חייבת להכיל לפחות 5 תווים',
                },
              }),
            }}
          />
        </div>
      </div>
      <div className='checkbox mb-3 mt-3'>
        <label>
          <input className={'ml-4'} type='checkbox' value='remember-me' />
          זכור אותי
        </label>
      </div>
      <button className='w-100 mt-4 mb-2 btn btn-lg rounded-3 btn-primary' type='submit'>
        Log In
      </button>
    </form>
  );
}

export default LogInForm;
