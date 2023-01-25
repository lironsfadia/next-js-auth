import { CheckboxProps } from '@/types/CheckboxProps';
import { ErrorMessage } from '@hookform/error-message';

function Checkbox({ checkboxId, checkboxLabelText, errors, showError, rest }: CheckboxProps) {
  return (
    <div className='form-check'>
      <input className={`form-check-input ${showError && 'is-invalid'}`} {...rest} type='checkbox' />
      <label className={`form-check-label ${showError && 'text-danger'}`}>{checkboxLabelText}</label>
      <ErrorMessage className='mb-1 fs-6 text-danger field-error-message' errors={errors} name={checkboxId} as='p' />
    </div>
  );
}

export default Checkbox;
