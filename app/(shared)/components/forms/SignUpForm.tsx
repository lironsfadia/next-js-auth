'use client';

import React, { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Select from './elements/Select';
import Input from './elements/Input';
import Checkbox from './elements/Checkbox';

import { postSignUp } from '@/services/apiHelper';
import { SignUpFormProps } from '@/types/FormProps';
import SignupSuccess from './SignupSuccess';
import { SignUpFormValues } from './formConstants';

function SignUpForm({ handleSubmitForm }: SignUpFormProps) {
  const [offRoadVehicleProvider, setOffRoadVehicleProvider] = useState(true);
  const [sentReq, setSentReq] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    try {
      postSignUp(data);
      clearErrors();
      //setSentReq(true);
      handleSubmitForm();
    } catch (err) {}
  };

  return sentReq ? (
    <SignupSuccess />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row g-3'>
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='email'
            fieldType='email'
            fieldLabelText='Email'
            showError={errors.email ?? undefined}
            rest={{
              ...register('email', {
                required: 'email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'please enter a valid email',
                },
              }),
            }}
            errors={errors}
          />
        </div>
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='password'
            fieldType='password'
            fieldLabelText='Password'
            showError={errors.password ?? undefined}
            errors={errors}
            rest={{
              ...register('password', {
                required: 'password is required',
                minLength: {
                  value: 5,
                  message: 'password must be at least 5 characters',
                },
              }),
            }}
          />
        </div>
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='firstName'
            fieldType='text'
            fieldLabelText='First Name'
            showError={errors.firstName ?? undefined}
            errors={errors}
            rest={{
              ...register('firstName', {
                required: 'firstName is required',
                pattern: { value: /^[a-zA-Z]+$/i, message: 'first name can only contain letters' },
              }),
            }}
          />
        </div>
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='lastName'
            fieldType='text'
            fieldLabelText='Family Name'
            showError={errors.lastName ?? undefined}
            errors={errors}
            rest={{
              ...register('lastName', {
                required: 'family name is required',
                pattern: { value: /^[a-zaA-Z]+$/i, message: 'family name can only contain letters' },
              }),
            }}
          />
        </div>

        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='phoneNumber'
            fieldType='tel'
            fieldLabelText='Telephone Number'
            showError={errors.phoneNumber ?? undefined}
            errors={errors}
            rest={{ ...register('phoneNumber', { required: 'telephone number is required' }) }}
          />
        </div>
      </div>
      <button className='w-100 mt-4 mb-2 btn btn-lg rounded-3 btn-primary' type='submit'>
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
