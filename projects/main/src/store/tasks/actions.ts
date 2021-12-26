import { createAction } from 'typesafe-actions';
import { CurrentTaskProps, ActiveTaskProps } from 'Models';

export const setCurrentTask = createAction('SET_CURRENT_TASK')<CurrentTaskProps | null>();
export const setActiveTask = createAction('SET_ACTIVE_TASK')<ActiveTaskProps | null>();
