import React from 'react';
import { ActiveTaskProps } from 'Models';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler, useFieldArray, FormProvider } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../common/Form/RHF/Input';
import Checkbox from '../common/Form/RHF/Checkbox';
import { setActiveTask } from '../../store/tasks/actions';
import { getActiveTask } from '../../store/tasks/selectors';
import { schema as FormSchema } from './validation';
import s from './style.module.scss';

const TaskForm = () => {
  const dispatch = useDispatch();
  const activeTask = useSelector(getActiveTask);

  const methods = useForm<ActiveTaskProps>({
    defaultValues: {
      name: '',
      email: '',
      links: [],
      confirm: false,
    },
    resolver: yupResolver(FormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: 'links',
    control: methods.control,
  });

  const onSubmit: SubmitHandler<ActiveTaskProps> = (data) => {
    dispatch(setActiveTask({ ...data }));
    methods.reset();
  };

  return (
    <div className={s.task}>
      <div className={s.task_form}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input label="Название" fieldName="name" />
            <Input label="Email" fieldName="email" />

            {fields.map((field, index) => {
              return (
                <div key={field.id} className={s.task_form_link}>
                  <Input
                    label={`Ссылка ${index + 1}`}
                    fieldName={`links.${index}.link`}
                    isArrayField
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Удалить
                  </Button>
                </div>
              );
            })}

            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => append({ link: '' })}
            >
              Добавить ссылку
            </Button>

            <Checkbox label="Подтверждаю" fieldName="confirm" />
            <Button variant="contained" color="primary" type="submit">
              Добавить
            </Button>
          </form>
        </FormProvider>
      </div>
      <div className={s.task_list}>
        <p>Active Task</p>
        <pre>{JSON.stringify(activeTask, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TaskForm;
