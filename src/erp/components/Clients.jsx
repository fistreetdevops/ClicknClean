import React, { useState } from "react";
import {
    Table,
    Space,
    Card,
    Row,
    Col,
    Button,
    Input,
    Select,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

const ClientTab = () => {
    const [loading, setLoading] = useState(false);

    const clients = [
        {
            id: 1,
            name: "John Doe",
            phone: "+91 9876543210",
            email: "john@example.com",
            totalBookings: 5,
            totalSpent: "$500",
            status: "Active",
        },
        {
            id: 2,
            name: "Mary Ann",
            phone: "+91 9123456789",
            email: "mary@example.com",
            totalBookings: 2,
            totalSpent: "$200",
            status: "Inactive",
        },
    ];

    const columns = [
        { title: "Client ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Total Bookings", dataIndex: "totalBookings", key: "totalBookings" },
        { title: "Total Spent", dataIndex: "totalSpent", key: "totalSpent" },
        { title: "Status", dataIndex: "status", key: "status" },
        {
            title: "Actions",
            key: "actions",
            render: () => (
                <Space>
                    <Button
                        type="link"
                        icon={<EditOutlined />}

                    />
                    <Button
                        type="link"
                        danger
                        icon={<DeleteOutlined />}

                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="mil-p-4">
            <div className="mil-flex mil-jcsb mil-aic mil-mb-20">
                <h2 className="mil-fs-20 mil-fw-600">Clients</h2>
                <Button type="primary" icon={<PlusOutlined />}>
                    Add Client
                </Button>
            </div>

            <Row gutter={16} className="mil-mb-20">
                <Col span={6}><Card title="Total Clients">150</Card></Col>
                <Col span={6}><Card title="Active Clients">120</Card></Col>
                <Col span={6}><Card title="Inactive Clients">30</Card></Col>
                <Col span={6}><Card title="Revenue from Clients">$15,000</Card></Col>
            </Row>

            <Space className="mil-mb-20" wrap>
                <Search placeholder="Search clients..." style={{ width: 200 }} />
                <Select placeholder="Status" style={{ width: 150 }}>
                    <Select.Option value="all">All</Select.Option>
                    <Select.Option value="active">Active</Select.Option>
                    <Select.Option value="inactive">Inactive</Select.Option>
                </Select>
            </Space>

            <Table
                columns={columns}
                dataSource={clients}
                rowKey="id"
                loading={loading}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default ClientTab;