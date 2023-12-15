import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Popconfirm,
  message,
  DatePicker,
  Drawer,
  InputNumber,
} from "antd";
import React from "react";
import axiosClient from "../homeworks/section06/configs/axiosClient";
import { QuestionCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import axios from "axios";
import dayjs from "dayjs";

export default function Products() {
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const [formUpdateDetail] = Form.useForm();
  const [selectedId, setSelectedId] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [orders, setOrders] = React.useState([]);
  const [orderDetails, setOrderdetails] = React.useState<any>([]);
  const [customers, setCustomers] = React.useState([]);
  const [employees, setEmployees] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axiosClient.get("/online-shop/orders");
      setOrders(response.data);
    };
    getOrders();
  }, [refresh]);

  React.useEffect(() => {
    const getCustomers = async () => {
      const response = await axiosClient.get("/online-shop/customers");
      setCustomers(response.data);
    };
    getCustomers();
  }, []);

  React.useEffect(() => {
    const getEmployees = async () => {
      const response = await axiosClient.get("/online-shop/employees");
      setEmployees(response.data);
    };
    getEmployees();
  }, []);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axiosClient.get("/online-shop/products");
      setProducts(response.data);
    };
    getProducts();
  }, [refresh]);

  const onCreate = async (values: any) => {
    let data = values;
    data["orderDetails"] = [];
    console.log(data);
    try {
      const response = await axiosClient.post("/online-shop/orders", values, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      message.success("Thêm mới thành công", 2);
      setRefresh(!refresh);
      form.resetFields(["customerId", "employeeId", "description"]);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onEdit = async (value: any) => {
    setOpen(true);
    setSelectedId(value.id);
    const orderDetail = await axios.get(
      "https://server.aptech.io/online-shop/orders/" + value.id,
      {
        headers: {
          Authorization: "bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    setOrderdetails(orderDetail.data.orderDetails);
    let a = value;
    a["createdDate"] = dayjs(value.createdDate);
    a["shippedDate"] = dayjs(value.shippedDate);
    formUpdate.setFieldsValue(a);
  };

  const onUpdate = async (values: any) => {
    try {
      let data = values;
      data["orderDetails"] = [];
      console.log(data);
      const response = await axiosClient.patch(
        "/online-shop/orders/" + selectedId,
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
      console.error("error:", err);
    }
  };

  const onSelectProduct = async (value: any) => {
    const getProduct = await axiosClient.get("/online-shop/products/" + value);
    formUpdateDetail.setFieldsValue(getProduct.data);
    console.log(getProduct);
  };

  const onUpdateDetail = async (value: any) => {
    try {
      let b = [
        orderDetails.map((item: any) => {
          console.log(item.product.id);
          return {
            quantity: item.quantity,
            price: item.price,
            discount: item.discount,
            productId: item.product.id,
          };
        }),
      ];

      b[0].push(value);
      let a = {
        orderDetails: b[0],
      };
      console.log(a);
      await axiosClient.patch("online-shop/orders/" + selectedId, a, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      // setOrderdetails(a["orderDetails"]);
      message.success("Cập nhật thành công");
      formUpdateDetail.resetFields();
      setRefresh(!refresh);
    } catch (error) {}
  };

  const onDeleteDetail = async (value: any) => {
    let a = orderDetails.map((item: any) => {
      console.log(item.product.id);
      if (item.product.id !== value) {
        return {
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
          productId: item.product.id,
        };
      }
    });
    let b = {
      orderDetails: a,
    };
    console.log(b);
    await axiosClient.patch("online-shop/orders/" + selectedId, b, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
  };

  const onDelete = async (id: number) => {
    try {
      const response = await axiosClient.delete("/online-shop/orders/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      setRefresh(!refresh);
      message.success("Xóa thành công", 2);
    } catch (err: any) {
      console.error(err);
    }
  };

  const orderColumns: any = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "right",
      className: "text-red-500",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (text: any, record: any, index: number) => {
        return <span>{dayjs(record["createdDate"]).format("DD/MM/YYYY")}</span>;
      },
    },
    {
      title: "Kiểu thanh toán",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Khách hàng",
      dataIndex: ["customer", "lastName"],
      key: "customer",
    },
    {
      title: "Nhân viên",
      dataIndex: ["employee", "lastName"],
      key: "employee",
    },

    {
      title: "Thao tác",
      dataIndex: "actions",
      key: "actions",
      width: "1%",
      render: (text: any, record: any, index: number) => {
        return (
          <Space>
            <Button type="primary" onClick={() => onEdit(record)}>
              Sửa
            </Button>

            <Popconfirm
              title="Delete the product"
              description="Are you sure to delete this product?"
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

  const orderDetailColumns: any = [
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      align: "right",
      className: "text-red-500",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product",
      key: "productName",
      render: (product: any) => product.name,
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (text: any, record: any, index: number) => {
        return <span>{record.price * record.quantity}</span>;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "actions",
      key: "actions",
      width: "1%",
      render: (text: any, record: any, index: number) => {
        return (
          <Space>
            <Popconfirm
              title="Xoá sản phẩm"
              description="Bạn muốn xoá sản phẩm khỏi đơn hàng?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => onDeleteDetail(record.product.id)}
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

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onCreate}
      >
        <Form.Item
          label="Khách hàng"
          name="customerId"
          rules={[
            {
              required: true,
              message: " Khách Hàng bắt buộc phải chọn",
            },
          ]}
        >
          <Select
            options={customers.map((item: any) => {
              return {
                value: item.id,
                label: item.lastName,
              };
            })}
          />
        </Form.Item>
        <Form.Item
          label="Nhân viên"
          name="employeeId"
          rules={[
            {
              required: true,
              message: "Nhân viên bắt buộc phải chọn",
            },
          ]}
        >
          <Select
            options={employees.map((item: any) => {
              return {
                value: item.id,
                label: item.lastName,
              };
            })}
          />
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
      <Table rowKey="id" dataSource={orders} columns={orderColumns} />

      <Drawer
        title={`chi tiết đơn hàng`}
        placement="right"
        size={"large"}
        onClose={() => setOpen(false)}
        open={open}
      >
        <h5>Đơn hàng</h5>
        <Form
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onUpdate}
        >
          <Form.Item label="Ngày tạo" name="createdDate">
            {/* <Input /> */}
            <DatePicker format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Ngày giao" name="shippedDate">
            {/* <Input /> */}
            <DatePicker format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Trạng thái" name="status">
            <Select
              options={[
                { value: "waiting", label: "Đang chờ" },
                { value: "Canceled", label: "Huỷ" },
                { value: "completed", label: "Hoàn thành" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="shippingAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Thành phố" name="shippingCity">
            <Input />
          </Form.Item>
          <Form.Item label="Thanh toán" name="paymentType">
            <Select
              options={[
                { value: "cash", label: "Tiền mặt" },
                { value: "card", label: "Thẻ" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Khách hàng"
            name="customerId"
            rules={[
              {
                required: true,
                message: " Khách Hàng bắt buộc phải chọn",
              },
            ]}
          >
            <Select
              options={customers.map((item: any) => {
                return {
                  value: item.id,
                  label: item.lastName,
                };
              })}
            />
          </Form.Item>
          <Form.Item
            label="Nhân viên"
            name="employeeId"
            rules={[
              {
                required: true,
                message: "Nhân viên bắt buộc phải chọn",
              },
            ]}
          >
            <Select
              options={employees.map((item: any) => {
                return {
                  value: item.id,
                  label: item.lastName,
                };
              })}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <h5>Chi tiết đơn hàng</h5>
        <Table
          rowKey={"id"}
          dataSource={orderDetails}
          columns={orderDetailColumns}
        />
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          onFinish={onUpdateDetail}
          form={formUpdateDetail}
        >
          <Form.Item
            label="Sản phẩm"
            name="productId"
            required
            rules={[
              {
                required: true,
                message: "Bắt buộc nhập sản phẩm",
              },
            ]}
          >
            <Select
              options={products.map((item: any) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              })}
              onChange={(value) => onSelectProduct(value)}
            />
          </Form.Item>
          <Form.Item
            label="Số lượng"
            name={"quantity"}
            initialValue={1}
            required
            rules={[
              {
                required: true,
                message: "Bắt buộc nhập số lượng",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Giá tiền"
            name={"price"}
            required
            rules={[
              {
                required: true,
                message: "Bắt buộc nhập giá tiền",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Giảm giá"
            name={"discount"}
            required
            rules={[
              {
                required: true,
                message: "Bắt buộc nhập giảm giá",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
