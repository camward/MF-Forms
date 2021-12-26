import { RootState } from 'typesafe-actions';
import { CurrentTaskProps, ActiveTaskProps } from 'Models';

export const getCurrentTask = (state: RootState) => state?.tasks?.current as CurrentTaskProps;
export const getActiveTask = (state: RootState) => state?.tasks?.active as ActiveTaskProps;
