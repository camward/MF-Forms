import { RootState } from 'typesafe-actions';
import { CurrentTaskProps } from 'Models';

export const getCurrentTask = (state: RootState) => state?.tasks?.current as CurrentTaskProps;
