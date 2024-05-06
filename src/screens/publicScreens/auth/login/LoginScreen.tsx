import React from 'react';
import { Button, Col, Divider, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import UseFormLogin from './hooks/useForm';
import { InputField, PasswordField } from 'src/components/form';

import { LoginScreenStyle } from './styled';

const LoginScreen: React.FC = () => {
  const { formik } = UseFormLogin();

  const { setFieldValue, handleSubmit, getFieldProps, errors, touched } = formik;

  return (
    <LoginScreenStyle>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <InputField
            field={getFieldProps('email')}
            setFieldValue={setFieldValue}
            className="form-control form-email"
            inputProps={{
              size: 'middle',
              prefix: <UserOutlined className="site-form-item-icon" />,
              placeholder: 'Username',
            }}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordField
            field={getFieldProps('password')}
            className="form-control form-email"
            inputProps={{
              size: 'middle',
              prefix: <LockOutlined className="site-form-item-icon" />,
              placeholder: 'Password',
            }}
            error={errors.password}
            touched={touched.password}
          />

          <Button className="btn-submit" onClick={() => handleSubmit()} type="primary">
            Login
          </Button>
          <Divider />
        </Col>
        <Col span={8} />
      </Row>
    </LoginScreenStyle>
  );
};

export default LoginScreen;
