import React, { useMemo } from 'react';
import {
  CheckSquareOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, MenuProps, Row, Typography } from 'antd';
import { Link, useLocation, useNavigate, useOutlet } from 'react-router-dom';

import { ROUTERS } from 'src/constants/routers';

import { PrivateLayoutStyle } from './styled';
import { useAppDispatch } from 'src/stores';
import { logoutAction } from 'src/stores/screens/publicScreens/auth/auth.action';

const { Text, Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const MENU = [
    {
      key: 'DASHBOARD',
      icon: <UploadOutlined />,
      label: <Link to={ROUTERS.DASHBOARD.PATH}>Dashboard</Link>,
      path: ROUTERS.DASHBOARD.PATH,
    },
    {
      key: 'TASK_MANAGEMENT',
      icon: <CheckSquareOutlined />,
      label: <Link to={ROUTERS.TASK_MANAGEMENT.PATH}>Task management</Link>,
      path: ROUTERS.TASK_MANAGEMENT.PATH,
    },
    {
      key: 'ACCOUNT',
      icon: <UserOutlined />,
      label: <Link to={ROUTERS.PROFILE.PATH}>Account</Link>,
      path: ROUTERS.PROFILE.PATH,
    },
  ];

  const selectedMenu = useMemo(() => {
    return MENU.find(item => item.path === location.pathname || item.path === '/')?.key ?? '';
  }, [location.pathname]);

  const items: MenuProps['items'] = [
    {
      label: <Text>Logout</Text>,
      icon: <LogoutOutlined />,
      key: '0',
      onClick: () => {
        void dispatch(
          logoutAction({
            callback: () => {
              localStorage.clear();
              navigate(ROUTERS.LOGIN.PATH);
            },
          }),
        );
      },
    },
  ];

  return (
    <PrivateLayoutStyle>
      <Sider className="layout-sider" breakpoint="lg" collapsedWidth="0" onBreakpoint={_ => {}} onCollapse={_ => {}}>
        <Row className="logo">
          <Title level={4}>LOGO</Title>
          <MenuUnfoldOutlined />
        </Row>
        <Menu className="layout-menu" mode="inline" defaultSelectedKeys={[selectedMenu]} items={MENU} />
      </Sider>

      <Layout className="layout-body">
        <Header className="body-header">
          <Dropdown menu={{ items }}>
            <Avatar src="https://tapchilamdep.com/photos/file/092023/giong-hat-cua-rose-rat-dac-trung-va-cuon-hut-va-thu-hut-nguoi-xem.jpg" />
          </Dropdown>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">Footer</Footer>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PrivateLayout;
