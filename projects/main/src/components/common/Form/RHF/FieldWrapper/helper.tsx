import { FieldErrors } from 'react-hook-form';

export const getError = (errors: FieldErrors, fieldName: string) => {
  const errorMessage = errors[fieldName]?.message;
  return errorMessage
    ? {
        error: true,
        // helperText: errorMessage,
      }
    : {};
};
