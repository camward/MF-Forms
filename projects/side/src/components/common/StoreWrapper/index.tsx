import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../store';

const store = configureStore();

interface StoreWrapperProps {
  hasStore: boolean;
  children: React.ReactNode;
}

const StoreWrapper: FC<StoreWrapperProps> = ({ hasStore, children }: StoreWrapperProps) => {
  return hasStore ? <Provider store={store}>{children}</Provider> : <>{children}</>;
};

export default StoreWrapper;
