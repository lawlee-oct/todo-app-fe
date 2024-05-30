import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from './shcema';
import { useAppDispatch } from 'src/stores';
import { loginAction } from 'src/stores/screens/publicScreens/auth/auth.action';
import { Login } from 'src/interfaces/pages/login';

const UseFormLogin = (): Login.useForm => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: Login.initialValues = {
    email: 'lam@gmail.com',
    password: '123123123',
  };

  const handleLogin = async (value): Promise<void> => {
    await dispatch(
      loginAction({
        data: value,
        callback: () => {
          navigate('/dashboard');
        },
      }),
    );
  };

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: loginSchema,
    initialValues,
    onSubmit: async value => {
      await handleLogin(value);
    },
  });

  return { formik };
};

export default UseFormLogin;
