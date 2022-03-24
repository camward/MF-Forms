import React from 'react';
import { Formik, Form, FormikValues, validateYupSchema, yupToFormErrors } from 'formik';
import Input from '../common/Form/Formik/Input';
import { schema as FormSchema, validationSchema } from './validation';
import s from '../Formik/style.module.scss';

const YupValidator = () => {
  const initialValues = {
    dateBase: '18.0922.3456',
    dateRequired: '',
    dateValid: '12.31.2029',
  } as FormikValues;

  const initialDataValues = {
    name: '123',
    description: '',
    bik: '',
    clientCode: '6',
    orgName: '',
  } as FormikValues;

  return (
    <div className={s.task}>
      <div className={s.task_form}>
        <p>
          <b>Проверка даты</b>
        </p>
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
      </div>

      <div className={s.task_list}>
        <p>
          <b>Дополнительные проверки</b>
        </p>
        <Formik
          enableReinitialize
          initialValues={initialDataValues}
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
              <Input label="Код клиента" fieldName="clientCode" />
              <Input label="Компания" fieldName="orgName" />
              <Input label="БИК" fieldName="bik" />
              <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>
                Отправить
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default YupValidator;
