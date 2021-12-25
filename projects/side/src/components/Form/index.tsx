import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const Form = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Форма</h1>
      <form onSubmit={onSubmit}>
        <Input label="Имя" placeholder="Введите значение" />
        <Input label="Фамилия" placeholder="Введите значение" />
        <Button label="Отправить" type="submit" />
      </form>
    </>
  );
};

export default Form;
