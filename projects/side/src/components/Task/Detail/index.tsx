import React from 'react';
import StoreWrapper from '../../common/StoreWrapper';
import TaskDetail from './detail';

const TaskWrapper = () => {
  return (
    <StoreWrapper hasStore>
      <TaskDetail />
    </StoreWrapper>
  );
};

export default TaskWrapper;
