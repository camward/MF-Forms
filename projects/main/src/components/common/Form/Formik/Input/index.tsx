import React, { FC, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';
import FieldWrapper from '../FieldWrapper';

interface InputProps {
  fieldName: string;
  label?: string;
}

const InputBase: FC<InputProps> = ({ fieldName, label, ...props }: InputProps) => {
  const [field] = useField(fieldName);
  const { setFieldValue } = useFormikContext();

  const onChangeHandler = useCallback((event) => {
    setFieldValue(fieldName, event.target.value);
  }, []);

  return (
    <div>
      {label && (
        <label htmlFor={fieldName} className="form-label">
          {label}
        </label>
      )}
      <input
        {...props}
        type="text"
        name={fieldName}
        value={field.value || ''}
        onChange={onChangeHandler}
        className="form-control"
        id={fieldName}
      />
    </div>
  );
};

export const InputFormik = (props: InputProps) => (
  <FieldWrapper {...props} fieldtype="input" component={InputBase} />
);

export default InputFormik;
