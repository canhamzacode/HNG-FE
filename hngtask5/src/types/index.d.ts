import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  type: string;
  name: string;
  register: (name: string) => UseFormRegisterReturn;
  errors: FieldErrors<{ [x: string]: string }>;
}

export interface PlatformProps {
  name: string;
  icon: ReactElement;
  previewColor: string;
}
