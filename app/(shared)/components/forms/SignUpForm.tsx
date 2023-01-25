'use client';

import React, { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Select from './elements/Select';
import Input from './elements/Input';
import { VehicleAvailability, VehicleManufacturer, VehicleModal } from '@/constants/enums';
import Checkbox from './elements/Checkbox';
import {
  DRIVER_OPTIONS,
  formCheckboxes,
  HITCHHIKERS_OPTIONS,
  SignUpFormValues,
  VEHICLE_AVAILABILITY_OPTION,
  VEHICLE_MODAL_OPTIONS,
  VEHICLE_VERSION_OPTIONS,
} from './formConstants';
import { postSignUp } from '@/services/apiHelper';
import { SignUpFormProps } from '@/types/FormProps';
import SignupSuccess from './SignupSuccess';

function SignUpForm({ handleSubmitForm }: SignUpFormProps) {
  const [offRoadVehicleProvider, setOffRoadVehicleProvider] = useState(true);
  const [sentReq, setSentReq] = useState(false);
  const [vehicleModalOptions, setVehicleModalOptions] = useState([{ value: '', text: '' }]);
  const [vehicleVersionOptions, setVehicleVersionOptions] = useState([{ value: '', text: '' }]);

  const offRoadVehicleHandler = ({ target: { value } }: { target: { value: VehicleAvailability } }) => {
    setOffRoadVehicleProvider(VehicleAvailability.AVAILABLE_VEHICLE === value);
  };

  const vehicleManufacturerHandler = ({ target: { value } }: { target: { value: VehicleModal } }) => {
    setVehicleModalOptions((VEHICLE_MODAL_OPTIONS as any)[(VehicleManufacturer as any)[value]]);
  };

  const vehicleModalHandler = ({ target: { value } }: { target: { value: VehicleModal } }) => {
    setVehicleVersionOptions(VEHICLE_VERSION_OPTIONS[value]);
  };

  const vehicleManufacturerOptions = useMemo(() => {
    return Object.keys(VehicleManufacturer).reduce((acc: Array<{ value: string; text: string }>, k) => {
      acc.push({ value: k, text: (VehicleManufacturer as any)[k] });
      return acc;
    }, []);
  }, []);

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
        <div className='form-floating col-sm-6 mb-2'>
          <Input
            fieldId='socialMediaLink'
            fieldType='text'
            fieldLabelText='לינק לפרופיל ברשת חברתית'
            showError={errors.socialMediaLink ?? undefined}
            errors={errors}
            rest={{ ...register('socialMediaLink', { required: 'שדה חובה' }) }}
          />
        </div>
        <div className='col-sm-12 mb-2'>
          <Select
            id='offRoadVehicle'
            showError={errors.offRoadVehicle ?? undefined}
            handleOnChange={offRoadVehicleHandler}
            labelText='האם יש לך רכב שטח?'
            labelAria='off road vehicle selectbox'
            pairs={VEHICLE_AVAILABILITY_OPTION}
            errors={errors}
            rest={{
              ...register('offRoadVehicle', { required: 'שדה חובה', minLength: 1 }),
            }}
          />
        </div>
        {offRoadVehicleProvider ? (
          <>
            <div className='col-sm-6 mb-2'>
              <Select
                id={'hitchhikersNumber'}
                showError={errors.hitchhikersNumber ?? undefined}
                labelText={'האם תהיה מוכן לצרף נוסעים נוספים איתך?'}
                labelAria={'hitchhikers number'}
                pairs={HITCHHIKERS_OPTIONS}
                errors={errors}
                rest={{ ...register('hitchhikersNumber', { required: 'שדה חובה', minLength: 1 }) }}
              />
            </div>
            <div className='col-sm-6 mb-2'>
              <Select
                id={'driverType'}
                showError={errors.driverType ?? undefined}
                labelText={'מה הניסיון שלך בנהיגת שטח?'}
                labelAria={'driver type'}
                pairs={DRIVER_OPTIONS}
                errors={errors}
                rest={{ ...register('driverType', { required: 'שדה חובה', minLength: 1 }) }}
              />
            </div>
            <div className='col-sm-6 mb-2'>
              <Select
                id={'vehicleManufacturer'}
                showError={errors.vehicleManufacturer ?? undefined}
                labelText={'יצרן הרכב'}
                labelAria={'vehicle manufacturer'}
                handleOnChange={vehicleManufacturerHandler}
                pairs={vehicleManufacturerOptions}
                errors={errors}
                rest={{ ...register('vehicleManufacturer', { required: 'שדה חובה', minLength: 1 }) }}
              />
            </div>
            <div className='col-sm-6 mb-2'>
              <Select
                id={'vehicleModal'}
                handleOnChange={vehicleModalHandler}
                showError={errors.vehicleModal ?? undefined}
                labelText={'דגם'}
                labelAria={'vehicle Modal'}
                pairs={vehicleModalOptions}
                errors={errors}
                rest={{ ...register('vehicleModal', { required: 'שדה חובה', minLength: 1 }) }}
              />
            </div>
            {vehicleVersionOptions.length > 0 && (
              <div className='col-sm-6 mb-2'>
                <Select
                  id={'vehicleVersion'}
                  showError={errors.vehicleManufacturer ?? undefined}
                  labelText={'גרסה'}
                  labelAria={'vehicle version'}
                  pairs={vehicleVersionOptions}
                  errors={errors}
                  rest={{ ...register('vehicleVersion', { required: 'שדה חובה', minLength: 1 }) }}
                />
              </div>
            )}
            <div className='col-sm-12 mb-2'>
              <label className='form-label'>שיפורים ותוספות (אם קיימים):</label>
            </div>
            {formCheckboxes.map(({ checkboxId, checkboxLabelText }) => (
              <div key={checkboxLabelText} className='col-sm-3 mb-2'>
                <Checkbox
                  checkboxId={checkboxId}
                  checkboxLabelText={checkboxLabelText}
                  showError={errors.carFeatureShields ?? undefined}
                  errors={errors}
                  rest={{ ...register(checkboxId as any) }}
                />
              </div>
            ))}
          </>
        ) : null}
      </div>
      <button className='w-100 mt-4 mb-2 btn btn-lg rounded-3 btn-primary' type='submit'>
        Sign up
      </button>
      <small className='text-muted'>כל הפרטים ישמרו במערכת מלבד השם המלא שיהיה חשוף למשתמשים רשומים</small>
    </form>
  );
}

export default SignUpForm;
