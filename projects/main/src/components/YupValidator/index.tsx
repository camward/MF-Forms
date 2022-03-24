import React from 'react';
import { Formik, Form, FormikValues, validateYupSchema, yupToFormErrors } from 'formik';
import Input from '../common/Form/Formik/Input';
import { schema as FormSchema, validationSchema } from './validation';

const YupValidator = () => {
  const initialValues = {
    dateBase: '18.0922.3456',
    dateRequired: '',
    dateValid: '12.31.2029',
  } as FormikValues;

  return (
    <div>
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

      <br />
      <br />
      <br />

      <Formik
        enableReinitialize
        initialValues={{ name: '123', description: '' }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          try {
            validateYupSchema<FormikValues>(values, validationSchema, true, {
              myData: values?.name,
            }).then();
          } catch (err) {
            return yupToFormErrors(err);
          }
          return {};
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <Input label="Название" fieldName="name" />
            <Input label="Описание" fieldName="description" />
            <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YupValidator;
