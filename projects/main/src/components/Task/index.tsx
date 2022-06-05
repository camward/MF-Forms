import React, { lazy, Suspense } from 'react';
import RemoteAdapter from '../common/RemoteAdapter';

const TaskList = lazy(() => import('remoteComponents/TaskList'));

const Task = () => (
  <>
    <h1>Задачи</h1>
    <RemoteAdapter>
      <TaskList />
    </RemoteAdapter>
  </>
);

export default Task;
