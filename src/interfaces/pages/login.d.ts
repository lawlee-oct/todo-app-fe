import { FormikProps } from 'formik';

export declare namespace Login {
  export interface initialValues {
    email: string;
    password: string;
  }

  export interface useForm {
    formik: FormikProps<any>;
  }
}
