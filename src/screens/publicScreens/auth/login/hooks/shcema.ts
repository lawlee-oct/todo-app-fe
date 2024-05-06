import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('EMAIL REQUIRED'),
  password: yup.string().required('PASSWORD REQUIRED').min(8),
});
