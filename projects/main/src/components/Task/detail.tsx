import React, { lazy } from 'react';
import RemoteAdapter from '../common/RemoteAdapter';

const TaskDetailRemote = lazy(() => import('remoteComponents/TaskDetail'));

const TaskDetail = () => (
  <>
    <h1>Задачи</h1>
    <p>Карточка задачи из Remote Module App</p>
    <RemoteAdapter>
      <TaskDetailRemote />
    </RemoteAdapter>
  </>
);

export default TaskDetail;
