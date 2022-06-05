import React from 'react';
import StoreWrapper from '../../common/StoreWrapper';
import Loader from '../../common/Loader';
import TaskList from './list';

const TaskWrapper = () => {
  return (
    <StoreWrapper hasStore>
      <Loader />
      <TaskList />
    </StoreWrapper>
  );
};

export default TaskWrapper;
