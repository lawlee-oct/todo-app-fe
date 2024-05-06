import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Spinning: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <SuspenseStyle>
      <Spin spinning={isLoading} />
    </SuspenseStyle>
  );
};

export default Spinning;

const SuspenseStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
