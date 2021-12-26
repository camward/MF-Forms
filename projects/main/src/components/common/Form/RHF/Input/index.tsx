import React, { FC, useMemo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import FieldWrapper from '../FieldWrapper';
import { getError } from '../FieldWrapper/helper';

interface InputProps {
  fieldName: string;
  label: string;
  isArrayField?: boolean;
}

const InputBase: FC<InputProps> = ({ fieldName, label, isArrayField }: InputProps) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const errorProps = useMemo(() => getError(errors, fieldName), [errors[fieldName]]);

  return isArrayField ? (
    <TextField
      {...register(fieldName)}
      {...errorProps}
      label={label}
      variant="outlined"
      size="small"
    />
  ) : (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <TextField {...field} {...errorProps} label={label} variant="outlined" size="small" />
      )}
    />
  );
};

export const InputRHF = (props: InputProps) => (
  <FieldWrapper {...props} fieldtype="input" component={InputBase} />
);

export default InputRHF;
