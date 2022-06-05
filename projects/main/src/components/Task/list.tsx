import React, { lazy } from 'react';
import RemoteAdapter from '../common/RemoteAdapter';

const TaskListRemote = lazy(() => import('remoteComponents/TaskList'));

const TaskList = () => (
  <>
    <h1>Задачи</h1>
    <p>Список задач из Remote Module App</p>
    <RemoteAdapter>
      <TaskListRemote />
    </RemoteAdapter>
  </>
);

export default TaskList;
