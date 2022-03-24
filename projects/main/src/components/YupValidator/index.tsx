import React from 'react';
import { Formik, Form, FormikValues } from 'formik';
import Input from '../common/Form/Formik/Input';
import { schema as FormSchema } from './validation';

const YupValidator = () => {
  const initialValues = {
    dateBase: '18.0922.3456',
    dateRequired: '',
    dateValid: '12.31.2029',
  } as FormikValues;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <Input label="Дата" fieldName="dateBase" />
          <Input label="Дата (обязательная)" fieldName="dateRequired" />
          <Input label="Дата (валидная)" fieldName="dateValid" />
          <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default YupValidator;
