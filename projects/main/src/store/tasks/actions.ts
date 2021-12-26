import { createAction } from 'typesafe-actions';
import { CurrentTaskProps } from 'Models';

export const setCurrentTask = createAction('SET_CURRENT_TASK')<CurrentTaskProps | null>();
