import React, { FC, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';
import FieldWrapper from '../FieldWrapper';

interface TextProps {
  fieldName: string;
  label: string;
}

const TextBase: FC<TextProps> = ({ fieldName, label, ...props }: TextProps) => {
  const [field] = useField(fieldName);
  const { setFieldValue } = useFormikContext();

  const onChangeHandler = useCallback((event) => {
    setFieldValue(fieldName, event.target.value);
  }, []);

  return (
    <div>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <textarea
        {...props}
        className="form-control"
        id={fieldName}
        rows={3}
        name={fieldName}
        onChange={onChangeHandler}
        value={field.value || ''}
      />
    </div>
  );
};

export const TextFormik = (props: TextProps) => (
  <FieldWrapper {...props} fieldtype="textarea" component={TextBase} />
);

export default TextFormik;
