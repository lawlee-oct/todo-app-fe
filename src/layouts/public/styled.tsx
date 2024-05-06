import { Layout } from 'antd';
import styled from 'styled-components';

export const PublicLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .layout-body {
    .body-header {
      padding: 0;
      background-color: transparent;
      box-shadow: 1px 1px 1px lightblue;
      text-align: left;
      padding: 0 30px;
      display: flex;
      align-items: center;

      .ant-typography {
        margin-bottom: 0;
      }
    }

    .body-content {
      margin: 30px;
      box-shadow: 3px 3px 2px 3px lightblue;
    }

    .body-footer {
      text-align: center;
    }
  }
`;
