import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';

const FieldWrapper: FC<FieldAttributes<any>> = (props) => {
  const { fieldName } = props;

  return (
    <div className="field mb-2">
      <Field {...props} />
      <ErrorMessage name={fieldName}>
        {(message) => (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            {message}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default FieldWrapper;
