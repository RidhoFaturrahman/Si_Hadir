import { AudioOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Calendar, Input, Layout, Menu, Space, theme } from "antd";
import React, { useState } from "react";
import "./Home.css";

const { Header, Sider } = Layout;
const { Search } = Input;

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("User", "sub1", <UserOutlined />),
  getItem("Pesan", "9", <FileOutlined />),
  getItem("Jadwal", "8", <FileOutlined />),
];

const menus = [
  {
    key: 1,
    label: "Users",
    path: "/user",
    icon: UserOutlined,
    // children: [],
  },
];
const handleNavigate = () => {
  console;
};

const Second = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="white-box7" style={{ color: "black" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Selamat Datang di
        Portal Si Hadir. Portal Absensi adalah sistem yang memungkinkan pengguna
        untuk mengakses informasi absensi dengan lebih cepat melalui Internet.
        Sistem ini dirancang untuk memberikan kemudahan bagi setiap pengguna
        dalam mencatat kehadiran dan memantau proses absensi untuk website Si
        Hadir. Selamat menggunakan fasilitas ini.
      </div>

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menus}
        />
      </Sider>

      <div className="Home" style={{ color: "black" }}>
        <h2>HOME</h2>
      </div>

      <div className="white-box5">
        <Search
          placeholder="User Name / Status"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>

      <div className="input">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button type="primary" block>
            INPUT USER
          </Button>
        </Space>
      </div>

      <div className="white-box6"></div>

      <div className="white-box4">
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
      </Layout>
    </Layout>
  );
};

export default Second;
