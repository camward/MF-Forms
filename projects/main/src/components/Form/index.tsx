import React from 'react';
import Button from 'remoteComponents/Button';
import Input from 'remoteComponents/Input';

const Form = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Форма</h1>
      <p>Форма из компонентов Remote Module App</p>
      <form onSubmit={onSubmit}>
        <Input label="Адрес" placeholder="Введите значение" />
        <Button label="Сохранить" type="submit" />
      </form>
    </>
  );
};

export default Form;
