import React, { lazy, Suspense } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';

const Button = lazy(() => import('remoteComponents/Button'));
const Input = lazy(() => import('remoteComponents/Input'));

const Form = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Форма</h1>
      <ErrorBoundary message="Форма временно недоступна">
        <Suspense fallback="Загрузка...">
          <p>Форма из компонентов Remote Module App</p>
          <form onSubmit={onSubmit}>
            <Input label="Адрес" placeholder="Введите значение" />
            <Button label="Сохранить" type="submit" />
          </form>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Form;
