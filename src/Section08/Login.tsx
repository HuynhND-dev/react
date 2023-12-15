import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";

const schema = yup.object({
  username: yup.string().required("Please input your username!"),
  password: yup.string().required("Please input your password!"),
});

type FieldType = {
  username: string;
  password: string;
  remember?: string;
};

const App: React.FC = () => {
  const {
    handleSubmit: hookFormSubmit,
    formState: { errors },
    register,
  } = useForm<FieldType>({
    resolver: yupResolver(schema),
  });

  const onFinish = async (values: FieldType) => {
    const url = "https://server.aptech.io/auth/login";
    console.log(values);
    try {
      const response = await axios.post(url, values);
      alert("Đăng Nhập thành Công");
      localStorage.setItem("access_token", response.data.access_token);
      console.log(response);
    } catch (err) {
      alert("Tài Khoản Hoặc Mật Khẩu Chưa Chính Xác");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: errors.username?.message }]}
      >
        <Input {...register("username")} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: errors.password?.message }]}
      >
        <Input.Password {...register("password")} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox {...register("remember")}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
