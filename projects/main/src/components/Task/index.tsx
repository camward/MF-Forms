import React, { lazy, Suspense } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';

const TaskList = lazy(() => import('remoteComponents/TaskList'));

const Task = () => (
  <>
    <h1>Задачи</h1>
    <ErrorBoundary>
      <Suspense fallback="Загрузка...">
        <TaskList />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default Task;
