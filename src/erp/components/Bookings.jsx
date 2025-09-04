import React, { useState } from "react";
import {
    Table,
    Tag,
    Space,
    Card,
    Row,
    Col,
    Button,
    Input,
    Select,
    DatePicker,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Search } = Input;
const { RangePicker } = DatePicker;

const Bookings = () => {
    const [loading, setLoading] = useState(false);

    const bookings = [
        {
            id: 101,
            customer: "John Doe",
            service: "Deep Cleaning",
            staff: "Alice",
            date: "2025-08-30 10:00 AM",
            status: "Pending",
            payment: "Paid",
            price: "$120",
        },
        {
            id: 102,
            customer: "Mary Ann",
            service: "Sofa Cleaning",
            staff: "Bob",
            date: "2025-08-31 02:00 PM",
            status: "Completed",
            payment: "Paid",
            price: "$80",
        },
        {
            id: 103,
            customer: "Sam Smith",
            service: "Carpet Cleaning",
            staff: "Charlie",
            date: "2025-09-01 11:00 AM",
            status: "Cancelled",
            payment: "Unpaid",
            price: "$50",
        },
    ];

    const columns = [
        {
            title: "Booking ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Customer",
            dataIndex: "customer",
            key: "customer",
        },
        {
            title: "Service",
            dataIndex: "service",
            key: "service",
        },
        {
            title: "Assigned Staff",
            dataIndex: "staff",
            key: "staff",
        },
        {
            title: "Date & Time",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color =
                    status === "Completed"
                        ? "green"
                        : status === "Pending"
                            ? "orange"
                            : "red";
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Payment",
            dataIndex: "payment",
            key: "payment",
            render: (payment) =>
                payment === "Paid" ? (
                    <Tag color="blue">Paid</Tag>
                ) : (
                    <Tag color="volcano">Unpaid</Tag>
                ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
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
            {/* Header */}
            <div className="mil-flex mil-jcsb mil-aic mil-mb-20">
                <h2 className="mil-fs-20 mil-fw-600">Bookings</h2>
                <Button type="primary" icon={<PlusOutlined />}>
                    Add Booking
                </Button>
            </div>

            {/* Summary Cards */}
            <Row gutter={16} className="mil-mb-20">
                <Col span={6}>
                    <Card title="Total Bookings" bordered={false}>
                        120
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Pending" bordered={false}>
                        25
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Completed" bordered={false}>
                        80
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Revenue" bordered={false}>
                        $12,300
                    </Card>
                </Col>
            </Row>

            {/* Filters */}
            <Space className="mil-mb-20" wrap>
                <Search placeholder="Search bookings..." style={{ width: 200 }} />
                <RangePicker />
                <Select placeholder="Status" style={{ width: 150 }}>
                    <Select.Option value="all">All</Select.Option>
                    <Select.Option value="pending">Pending</Select.Option>
                    <Select.Option value="completed">Completed</Select.Option>
                    <Select.Option value="cancelled">Cancelled</Select.Option>
                </Select>
                <Select placeholder="Service" style={{ width: 150 }}>
                    <Select.Option value="deep">Deep Cleaning</Select.Option>
                    <Select.Option value="sofa">Sofa Cleaning</Select.Option>
                    <Select.Option value="carpet">Carpet Cleaning</Select.Option>
                </Select>
            </Space>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={bookings}
                rowKey="id"
                loading={loading}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default Bookings;
