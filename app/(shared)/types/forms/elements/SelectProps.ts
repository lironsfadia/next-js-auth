import { FieldError } from 'react-hook-form';

export type SelectProps = {
  errors: any;
  handleOnChange?: (e: any) => void;
  id: string;
  labelAria: string;
  labelText: string;
  showError: FieldError | undefined;
  pairs: {
    value: string | number | readonly string[] | undefined;
    text: string;
  }[];
  rest?: any;
};
