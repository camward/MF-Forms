import React from 'react';

type PropsType = {
  children: React.ReactNode;
  message?: string;
};

export default class ErrorBoundary extends React.Component<PropsType, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children, message } = this.props;

    if (hasError) {
      return <p>{message || 'Сервис временно недоступен'}</p>;
    }

    return children;
  }
}
