import { FileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu, Space, theme, } from 'antd';
import React, { useState } from 'react';
import './User.css';

const { Header, Sider } = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}

const items = [
    getItem('User', 'sub1', <UserOutlined />),
    getItem('Pesan', '9', <FileOutlined />),
    getItem('Jadwal', '8', <FileOutlined />),
];

const Thrid = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { token } = theme.useToken();

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <div className="white-box">
                <Space direction="vertical" size={0}>
                    <Space wrap size={0}>
                        <Avatar size={100} icon={<UserOutlined />} />
                    </Space>
                </Space>
            </div>

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <div className="Home" style={{ color: 'black' }}>
                <h2>USER</h2>
            </div>

            <div className="white-box3">

            </div>

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
            </Layout>
        </Layout>
    );
};

export default Thrid;
