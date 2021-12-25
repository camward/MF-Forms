import React from 'react';
import StoreWrapper from '../../common/StoreWrapper';
import TaskList from './list';

const TaskWrapper = () => {
  return (
    <StoreWrapper hasStore>
      <TaskList />
    </StoreWrapper>
  );
};

export default TaskWrapper;
