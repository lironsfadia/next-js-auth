import { FieldError } from 'react-hook-form';

export type CheckboxProps = {
  checkboxId: string;
  checkboxLabelText: string;
  errors: any;
  showError: FieldError | undefined;
  rest: any;
};
