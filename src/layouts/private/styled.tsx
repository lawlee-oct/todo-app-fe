import { Layout } from 'antd';
import styled from 'styled-components';

export const PrivateLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .layout-sider {
    background-color: #0f1014;
    box-shadow: 1px 1px 1px lightblue;

    span,
    i,
    h2,
    h3,
    h4,
    a {
      color: #ffffff;
    }

    .logo {
      height: 64px;
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 1px lightblue;
      padding-left: 20px;
      padding-right: 16px;
      justify-content: space-between;

      .anticon-menu-unfold {
        font-size: 20px;
        padding: 4px;

        &:hover {
          background-color: #1b84ff;
          cursor: pointer;
          border-radius: 4px;
        }
      }

      .ant-typography {
        margin-left: 10px;
        margin-bottom: 0;
      }
    }

    .layout-menu {
      height: calc(100% - 64px);
      background-color: transparent;
      border: none;
      padding: 15px 10px;

      .ant-menu-item {
        margin-top: initial;
        margin-bottom: 10px;
      }

      .ant-menu-item-selected {
        background-color: #1b84ff !important;
      }

      .ant-menu-item-selected {
        background-color: #b8d8f1;
      }
    }
  }

  .layout-body {
    .body-header {
      padding: 0;
      background-color: transparent;
      box-shadow: 1px 1px 1px lightblue;
      text-align: right;
      padding: 0 30px;
    }

    .body-content {
      overflow-y: auto;
      margin: 20px;
      box-shadow: 3px 3px 2px 3px lightblue;
      padding: 18px;
    }

    .body-footer {
      text-align: center;
    }
  }
`;
