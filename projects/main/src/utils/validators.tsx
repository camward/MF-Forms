import * as Yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';
import { isValid, parse } from 'date-fns';

const errorMessageDate = 'Введите корректную дату';
const errorMessage = 'Поле обязательно для заполнения';
const errorMessageBIK = 'Значение должно начинаться с "04" и состоять из 9 цифр';

Yup.addMethod(Yup.string, 'dateCheck', function (message: string) {
  return this.test('Date check', message || errorMessageDate, (value) => {
    const data = value?.replace(/[^0-9]/g, '');
    if (data?.length) {
      const selectedDate = value ? parse(value, 'dd.MM.yyyy', new Date()) : null;
      return selectedDate ? isValid(selectedDate) : true;
    }
    return true;
  });
});

Yup.addMethod(Yup.string, 'dateRequired', function (message: string) {
  return this.test('Date required', message || errorMessage, (value) => {
    const data = value?.replace(/[^0-9]/g, '');
    return !!data?.length;
  });
});

Yup.addMethod(Yup.string, 'isBIK', function (message: string) {
  return this.test('BIK check', message || errorMessageBIK, (value) => {
    if (value) {
      return new RegExp('^04[0-9]{7}$').test(value);
    }
    return true;
  });
});

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends Yup.BaseSchema<TType, TContext, TOut> {
    dateCheck(message?: string): StringSchema<TType, TContext>;
    dateRequired(message?: string): StringSchema<TType, TContext>;
    isBIK(message?: string): StringSchema<TType, TContext>;
  }
}

export default Yup;
