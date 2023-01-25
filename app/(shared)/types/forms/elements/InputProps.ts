import { FieldError } from 'react-hook-form';

export type InputProps = {
  fieldId: string;
  fieldType: 'text' | 'number' | 'email' | 'password' | 'tel' | 'checkbox';
  fieldLabelText: string;
  showError: FieldError | undefined;
  errors: any;
  rest: any;
};
