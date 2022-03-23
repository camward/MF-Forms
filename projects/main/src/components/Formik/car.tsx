import React, { FC } from 'react';
import { FormikValues, FieldArray, useFormikContext } from 'formik';
import Input from '../common/Form/Formik/Input';
import s from './style.module.scss';

interface CarProps {
  idx: number;
}

const Car: FC<CarProps> = ({ idx }: CarProps) => {
  const { values } = useFormikContext();
  const carsList = (values as FormikValues)?.cars[idx]?.models || [];

  return (
    <FieldArray
      name={`cars.${idx}.models`}
      render={(arrayHelpers) => (
        <div className={s.cars_list}>
          <div className="form-label">Модели</div>
          {carsList?.map((item: string, index: number) => (
            <div key={String(index)} className={s.cars_item}>
              <Input label="" fieldName={`cars.${idx}.models.${index}`} />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => arrayHelpers.remove(index)}
              >
                Удалить модель
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={() => arrayHelpers.push('')}
          >
            Добавить модель
          </button>
        </div>
      )}
    />
  );
};

export default Car;
