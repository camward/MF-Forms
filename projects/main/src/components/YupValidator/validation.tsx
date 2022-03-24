import Yup from '../../utils/validators';

export const schema = Yup.object().shape({
  dateBase: Yup.string().dateCheck().dateRequired(),
  dateRequired: Yup.string().dateRequired('Дата обязательна. Фомат dd.MM.yyyy'),
  dateValid: Yup.string().dateCheck('Формат корректной даты dd.MM.yyyy'),
});
