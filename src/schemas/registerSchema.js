import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Email is invalid.'
    )
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must be at least 7 characters.'),
});