'use client';

import { SelectProps } from '@/types/forms/elements/SelectProps';
import { ErrorMessage } from '@hookform/error-message';

function Select({ id, labelText, labelAria, pairs, showError, errors, handleOnChange, rest }: SelectProps) {
  return (
    <div className='form-group'>
      <label className={`${showError && 'text-danger'}`} htmlFor={id}>
        {labelText}
      </label>
      <select name={id} {...rest} className='form-select' aria-label={labelAria} onChange={handleOnChange}>
        <option defaultValue={''}>{''}</option>
        {pairs.map(({ value, text }) => (
          <option key={text} value={value}>
            {text}
          </option>
        ))}
      </select>
      <ErrorMessage className='mb-1 fs-6 text-danger field-error-message' errors={errors} name={id} as='p' />
    </div>
  );
}

export default Select;
