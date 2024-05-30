import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Popconfirm, Table } from 'antd';
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { InputField } from 'src/components/form';
import { WrapperStyled } from './styled';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from 'src/stores';
import {
  createTodoActions,
  deleteTodoActions,
  getTodosAction,
  updateTodoActions,
} from 'src/stores/screens/privateScreens/todo/todo.action';

const TaskManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, isLoading } = useAppSelector(state => state.todos);

  const [isModalOpen, setIsModalOpen] = useState<{ isShow: boolean; type?: 'edit' | 'create' }>({
    isShow: false,
    type: 'create',
  });
  const [dataEdit, setDataEdit] = useState<{ id: string | number; title: string }>({ id: '', title: '' });

  const showModal = (type: 'edit' | 'create'): void => {
    resetForm();
    setIsModalOpen({ isShow: true, type });
  };

  const handleOk = (): void => {
    if (isModalOpen.type === 'edit') {
      void dispatch(
        updateTodoActions({
          id: dataEdit.id,
          data: values,
          callback: () => {
            void dispatch(getTodosAction());
          },
        }),
      );
    } else handleSubmit();
    setIsModalOpen({ isShow: false });
  };

  const handleCancel = (): void => {
    setIsModalOpen({ isShow: false });
    resetForm();
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: record => (
        <React.Fragment>
          <EditOutlined
            className="icon-action"
            onClick={() => {
              setDataEdit({ id: record?.id, title: record.title });
              showModal('edit');
            }}
          />
          <Popconfirm
            onConfirm={() => {
              void dispatch(
                deleteTodoActions({
                  id: record?.id,
                  callback: () => {
                    void dispatch(getTodosAction());
                  },
                }),
              );
            }}
            title="Are you sure？"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <DeleteOutlined className="icon-action icon-delete" />
          </Popconfirm>
        </React.Fragment>
      ),
    },
  ];

  const initialValues = {
    title: isModalOpen.type === 'create' ? '' : dataEdit.title,
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: async values => {
      await dispatch(
        createTodoActions({
          data: values,
          callback: () => {
            void dispatch(getTodosAction());
          },
        }),
      );
    },
  });

  const { setFieldValue, handleSubmit, getFieldProps, resetForm, errors, touched, values } = formik;

  useEffect(() => {
    void dispatch(getTodosAction());
  }, []);

  return (
    <WrapperStyled>
      <Col className="col-create">
        <Button type="primary" onClick={() => showModal('create')}>
          Create
        </Button>
      </Col>

      <Col span={24}>
        <Table dataSource={todos} columns={columns} loading={isLoading} />
      </Col>

      <Modal
        title={isModalOpen.type === 'create' ? 'Create task' : 'Edit task'}
        open={isModalOpen.isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputField
          field={getFieldProps('title')}
          setFieldValue={setFieldValue}
          inputProps={{
            placeholder: 'Please enter task!',
          }}
          error={errors.title}
          touched={touched.title}
        />
      </Modal>
    </WrapperStyled>
  );
};

export default TaskManagement;
