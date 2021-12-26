import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox as CheckboxMUI, FormControlLabel } from '@material-ui/core';
import FieldWrapper from '../FieldWrapper';

interface CheckboxProps {
  fieldName: string;
  label: string;
}

const CheckboxBase: FC<CheckboxProps> = ({ fieldName, label }: CheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<CheckboxMUI {...field} checked={field.value} color="primary" />}
          label={label}
        />
      )}
    />
  );
};

export const CheckboxRHF = (props: CheckboxProps) => (
  <FieldWrapper {...props} fieldtype="checkbox" component={CheckboxBase} />
);

export default CheckboxRHF;
