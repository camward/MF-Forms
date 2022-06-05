import React from 'react';
import StoreWrapper from '../../common/StoreWrapper';
import Loader from '../../common/Loader';
import TaskDetail from './detail';

const TaskWrapper = () => {
  return (
    <StoreWrapper hasStore>
      <Loader />
      <TaskDetail />
    </StoreWrapper>
  );
};

export default TaskWrapper;
