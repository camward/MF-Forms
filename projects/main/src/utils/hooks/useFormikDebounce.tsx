import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import CONFIG from '../../config';

/**
 * Получить отложенное значение и записать в форму
 * @param value
 * @param fieldName
 * @param isChanged
 * @param onAfterChange
 * @param delay
 */
const useFormikDebounce = (
  value: any,
  fieldName: string,
  isChanged: boolean,
  onAfterChange?: Function,
  delay: number = CONFIG.DEBOUNCE_DELAY || 0,
) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (isChanged) {
        setFieldValue(fieldName, value);
        if (onAfterChange) {
          onAfterChange(value, values);
        }
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
};

export default useFormikDebounce;
