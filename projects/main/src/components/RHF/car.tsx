import React, { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Input from '../common/Form/RHF/Input';
import { Button } from '@material-ui/core';
import s from './style.module.scss';

interface CarProps {
  idx: number;
}

const Car: FC<CarProps> = ({ idx }: CarProps) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: `cars.${idx}.models`,
    control: control,
  });

  return (
    <div className={s.cars_list}>
      <div className="form-label">Модели</div>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={s.cars_item}>
            <Input
              label={`Модель ${index + 1}`}
              fieldName={`cars.${idx}.models.${index}.model`}
              isArrayField
            />
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => remove(index)}
            >
              Удалить модель
            </Button>
          </div>
        );
      })}

      <Button
        className="mb-3"
        variant="contained"
        color="primary"
        type="button"
        onClick={() => append({ model: '' })}
      >
        Добавить модель
      </Button>
    </div>
  );
};

export default Car;
