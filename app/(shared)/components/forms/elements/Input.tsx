'use client';

import { InputProps } from '@/types/forms/elements/InputProps';
import { ErrorMessage } from '@hookform/error-message';

function Input({ fieldId, fieldType, fieldLabelText, showError, errors, rest }: InputProps) {
  return (
    <div className='form-group'>
      <label className={`${showError && 'text-danger'}`} htmlFor={fieldId}>
        {fieldLabelText}
      </label>
      <input {...rest} type={fieldType} className={`form-control rounded-3 ${showError && 'is-invalid'}`} />
      <ErrorMessage className='mb-1 fs-6 text-danger field-error-message' errors={errors} name={fieldId} as='p' />
    </div>
  );
}

export default Input;
