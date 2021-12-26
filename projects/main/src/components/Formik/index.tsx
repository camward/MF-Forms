import React from 'react';
import { CurrentTaskProps } from 'Models';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FieldArray, Form, FormikValues } from 'formik';
import Input from '../common/Form/Formik/Input';
import Text from '../common/Form/Formik/Text';
import { setCurrentTask } from '../../store/tasks/actions';
import { getCurrentTask } from '../../store/tasks/selectors';
import { schema as FormSchema } from './validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './style.module.scss';

const TaskForm = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector(getCurrentTask);

  const initialValues = { name: '', email: '', links: [], comment: '' } as FormikValues;

  return (
    <div className={s.task}>
      <div className={s.task_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(setCurrentTask({ ...values } as CurrentTaskProps));
            setSubmitting(false);
            resetForm(initialValues);
          }}
        >
          {({ handleSubmit, isSubmitting, values }) => {
            const onSubmitForm = () => handleSubmit();

            return (
              <Form>
                <Input label="Название" fieldName="name" />
                <Input label="Email" fieldName="email" />
                <FieldArray
                  name="links"
                  render={(arrayHelpers) => (
                    <div>
                      <div className="form-label">Ссылки</div>
                      {values.links.map((item: string, index: number) => (
                        <div key={String(index)} className={s.task_form_field_item}>
                          <Input label="" fieldName={`links.${index}`} />
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Удалить
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-primary mb-2"
                        onClick={() => arrayHelpers.push('')}
                      >
                        Добавить ссылку
                      </button>
                    </div>
                  )}
                />
                <Text label="Комментарий" fieldName="comment" />
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  onClick={onSubmitForm}
                >
                  Добавить
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className={s.task_list}>
        <p>Current Task</p>
        <pre>{JSON.stringify(currentTask, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TaskForm;
