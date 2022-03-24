import Yup from '../../utils/validators';

export const schema = Yup.object().shape({
  dateBase: Yup.string().dateCheck().dateRequired(),
  dateRequired: Yup.string().dateRequired('Дата обязательна. Фомат dd.MM.yyyy'),
  dateValid: Yup.string().dateCheck('Формат корректной даты dd.MM.yyyy'),
});

export const validationSchema = Yup.object().shape({
  description: Yup.string()
    .test('description', 'Название не должно быть "123"', function (item) {
      const myData = this.options.context?.myData;
      if (!item && myData === '123') {
        // return this.createError({ path: ${this.path}, message: errorMessage });
        return false;
      }
      return true;
    })
    .nullable(),
});
