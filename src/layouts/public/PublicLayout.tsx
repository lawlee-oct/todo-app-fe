import React from 'react';
import { Layout, Typography } from 'antd';
import { useOutlet } from 'react-router-dom';

import { PublicLayoutStyle } from './styled';

const { Title } = Typography;
const { Header, Content } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PublicLayoutStyle>
      <Layout className="layout-body">
        <Header className="body-header">
          <Title level={2}>LOGO</Title>
        </Header>

        <Content className="body-content">{outlet}</Content>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
