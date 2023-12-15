import React, { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  BsList,
  BsFillPersonFill,
  BsPersonLinesFill,
  BsCart2,
  BsDiagram2Fill,
  BsLayersFill,
  BsHouseFill,
} from "react-icons/bs";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Categories from "../Section07/Categories";
import Customers from "../Section07/Customers";
import Employees from "../Section07/Employees";
import Products from "../Section07/Product";
import Suppliers from "../Section07/Suppliers";
import Orders from "../Section07/Orders";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = {
  key: React.Key;
  icon?: React.ReactNode;
  to?: string;
  label: React.ReactNode;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  to?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    to,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/", <BsHouseFill />, "/"),
  getItem("Danh mục", "/categories", <BsList />, "/categories"),
  getItem("Khách hàng", "/customers", <BsFillPersonFill />, "/customers"),
  getItem("Nhân viên", "/employees", <BsPersonLinesFill />, "/employees"),
  getItem("Sản phẩm", "/products", <BsLayersFill />, "/products"),
  getItem("Nhà cung cấp", "/suppliers", <BsDiagram2Fill />, "/suppliers"),
  getItem("Đơn hàng", "/orders", <BsCart2 />, "/orders"),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  console.log(location);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
        >
          {items.map((item) => (
            <Menu.Item key={item?.key} icon={item?.icon}>
              {item ? (
                item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  item.label
                )
              ) : null}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/categories" element={<Categories />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/products" element={<Products />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/orders" element={<Orders />} />
              {/* <Route path="/orders" element={} /> */}
              {/* Add other routes for different components as needed */}
            </Routes>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>© HuynhND 2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
