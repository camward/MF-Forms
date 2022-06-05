import React, { FC, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';

interface RemoteAdapterProps {
  children: React.ReactNode;
  message?: string;
}

const RemoteAdapter: FC<RemoteAdapterProps> = ({ children, message }: RemoteAdapterProps) => (
  <ErrorBoundary message={message}>
    <Suspense fallback="Загрузка...">{children}</Suspense>
  </ErrorBoundary>
);

export default RemoteAdapter;
