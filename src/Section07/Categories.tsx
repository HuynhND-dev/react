import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
  Popconfirm,
  message,
} from "antd";
import React from "react";
import axiosClient from "../homeworks/section06/configs/axiosClient";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function Categories() {
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const [selectedId, setSelectedId] = React.useState(-1);

  const [open, setOpen] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  const [refresh, setRefresh] = React.useState(false);

  // GET /online-shop/categories
  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axiosClient.get("/online-shop/categories");
      setCategories(response.data);
    };

    getCategories();
  }, [refresh]);

  const columns: any = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "right",
      className: "text-red-500",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Mô Tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Thao tác",
      dataIndex: "actions",
      key: "actions",
      width: "1%",
      render: (text: any, record: any, index: number) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setSelectedId(record.id);
                formUpdate.setFieldsValue(record);
              }}
            >
              Sửa
            </Button>

            <Popconfirm
              title="Delete the Categories"
              description="Are you sure to delete this Categories?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => {
                onDelete(record.id);
              }}
            >
              <Button type="primary" danger>
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const onFinish = async (values: any) => {
    console.log(values);

    try {
      const response = await axiosClient.post(
        "/online-shop/categories",
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);
      message.success("Thêm mới thành công", 2);
      setRefresh(!refresh);
      form.resetFields(["name", "description"]);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onFinishUpdate = async (values: any) => {
    try {
      const response = await axiosClient.patch(
        "/online-shop/categories/" + selectedId,
        values,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);

      setRefresh(!refresh);
      message.success("Cập nhật thành công", 2);
      formUpdate.resetFields();
      setOpen(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onDelete = async (id: number) => {
    try {
      const response = await axiosClient.delete(
        "/online-shop/categories/" + id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response);
      setRefresh(!refresh);
      message.success("Xóa thành công", 2);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Tên bắt buộc phải nhập",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
      <Table rowKey="id" dataSource={categories} columns={columns} />

      <Modal
        title="Cập nhật thông tin sản phẩm"
        okText="Cập nhật"
        cancelText="Đóng"
        open={open}
        onOk={() => {}}
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div>
            <Divider />
            <Space>
              <Button
                type="default"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Đóng
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  formUpdate.submit();
                }}
              >
                Cập nhật
              </Button>
            </Space>
          </div>
        }
      >
        <Divider />
        <Form
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinishUpdate}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: "Tên  bắt buộc phải nhập",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
