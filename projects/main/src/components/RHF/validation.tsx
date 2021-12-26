import * as Yup from 'yup';

const errorMessage = 'Поле обязательно для заполнения';
const errorEmail = 'Введите корректный email';

export const schema = Yup.object().shape({
  name: Yup.string().required(errorMessage).nullable(),
  email: Yup.string().required(errorMessage).email(errorEmail).nullable(),
});
