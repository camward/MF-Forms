import React, { lazy } from 'react';
import RemoteAdapter from '../common/RemoteAdapter';

const Button = lazy(() => import('remoteComponents/Button'));
const Input = lazy(() => import('remoteComponents/Input'));

const Form = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Форма</h1>
      <RemoteAdapter message="Форма временно недоступна">
        <p>Форма из компонентов Remote Module App</p>
        <form onSubmit={onSubmit}>
          <Input label="Адрес" placeholder="Введите значение" />
          <Button label="Сохранить" type="submit" />
        </form>
      </RemoteAdapter>
    </>
  );
};

export default Form;
