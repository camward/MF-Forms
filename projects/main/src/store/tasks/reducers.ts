import { combineReducers } from 'redux';
import { CurrentTaskProps, ActiveTaskProps } from 'Models';
import { createReducer } from 'typesafe-actions';
import { setCurrentTask, setActiveTask } from './actions';

export const currentTask = createReducer({} as CurrentTaskProps | null).handleAction(
  setCurrentTask,
  (state, action) => action.payload,
);

export const activeTask = createReducer({} as ActiveTaskProps | null).handleAction(
  setActiveTask,
  (state, action) => action.payload,
);

const tasksReducer = combineReducers({
  current: currentTask,
  active: activeTask,
});

export default tasksReducer;
