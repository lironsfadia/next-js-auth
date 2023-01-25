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
        <div className='form-floating col-sm-6 mb-2'>
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
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='firstName'
            fieldType='text'
            fieldLabelText='שם פרטי (בעברית)'
            showError={errors.firstName ?? undefined}
            errors={errors}
            rest={{
              ...register('firstName', {
                required: 'שדה חובה',
                pattern: { value: /^[א-ת\s]+$/i, message: 'שם פרטי חייב לכלול אותיות בעברית בלבד' },
              }),
            }}
          />
        </div>
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='lastName'
            fieldType='text'
            fieldLabelText='שם משפחה (בעברית)'
            showError={errors.lastName ?? undefined}
            errors={errors}
            rest={{
              ...register('lastName', {
                required: 'שדה חובה',
                pattern: { value: /^[א-ת\s]+$/i, message: 'שם משפחה חייב לכלול אותיות בעברית בלבד' },
              }),
            }}
          />
        </div>

        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='phoneNumber'
            fieldType='tel'
            fieldLabelText='מספר טלפון'
            showError={errors.phoneNumber ?? undefined}
            errors={errors}
            rest={{ ...register('phoneNumber', { required: 'שדה חובה' }) }}
          />
        </div>
      </div>
      <button className='w-100 mt-4 mb-2 btn btn-lg rounded-3 btn-primary' type='submit'>
        Sign up
      </button>
      <small className='text-muted'>כל הפרטים ישמרו במערכת מלבד השם המלא שיהיה חשוף למשתמשים רשומים</small>
    </form>
  );
}

export default SignUpForm;
