import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DiffOutlined,
    AppstoreOutlined,
    CalendarOutlined, SettingOutlined, SnippetsOutlined, UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Popover } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
const { Header, Sider, Content } = Layout;

const DoctorsMainDashboard = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const user = Cookies.get('user-token')
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    if (!user) return navigate('/auth/login')
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical">
                        <Link to={'/'} >
                            <h1 style={{ textAlign: 'center', margin: '24px 0', fontSize: '24px', color: 'white' }}>Azhar INC</h1>
                        </Link>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <AppstoreOutlined />,
                                label: <Link to={'main'}>Main</Link>,
                            },
                            {
                                key: '2',
                                icon: <CalendarOutlined />,
                                label: <Link to={'book-appointment'}>Book appointment</Link>,
                            },
                            {
                                key: '3',
                                icon: <DiffOutlined />,
                                label: <Link to={'my-appointment'}>My appointments</Link>,
                            },
                            {
                                key: '4',
                                icon: <SnippetsOutlined />,
                                label: <Link to={'my-documents'}>My documents</Link>,
                            },
                            {
                                key: '5',
                                icon: <SettingOutlined />,
                                label: <Link to={'my-settings'}>Settings</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 20px' }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Popover
                            content={<a onClick={hide}>Close</a>}
                            title="Title"
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}
                        >
                            <Button icon={<UserOutlined style={{ fontSize: '18px' }} />} type="dashed" size='large' shape='circle' ></Button>
                        </Popover>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default DoctorsMainDashboard