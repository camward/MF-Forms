import React, { FC } from 'react';
import { useFormContext, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import s from './style.module.scss';

const FieldWrapper: FC<FieldValues> = ({ component: FieldComponent, ...props }: FieldValues) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { fieldName } = props;

  return (
    <div className={s.field}>
      <FieldComponent {...props} />
      <ErrorMessage
        errors={errors}
        name={fieldName}
        render={({ message }) => <div className={s.field_error}>{message}</div>}
      />
    </div>
  );
};

export default FieldWrapper;
