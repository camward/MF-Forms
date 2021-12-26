import { combineReducers } from 'redux';
import { CurrentTaskProps } from 'Models';
import { createReducer } from 'typesafe-actions';
import { setCurrentTask } from './actions';

export const currentTask = createReducer({} as CurrentTaskProps | null).handleAction(
  setCurrentTask,
  (state, action) => action.payload,
);

const tasksReducer = combineReducers({
  current: currentTask,
});

export default tasksReducer;
