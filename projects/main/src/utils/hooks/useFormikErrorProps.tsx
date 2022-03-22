import { useMemo } from 'react';
import { getIn, useFormikContext } from 'formik';

/**
 * Получить поля ошибок
 * @param fieldName
 */
const useFormikErrorProps = (fieldName: string) => {
  const { errors, submitCount, status: statusForm } = useFormikContext();

  const getError = () => getIn(errors, fieldName);
  const hasError = useMemo(
    () => getError() && (submitCount || statusForm === 'error'),
    [submitCount, errors, fieldName, statusForm],
  );

  const status = (hasError ? 'error' : undefined) as 'error' | 'success' | undefined;
  const extraText = (hasError ? getError() : '') as string;
  const error = !!hasError as boolean;

  return { status, extraText, error };
};

export default useFormikErrorProps;
