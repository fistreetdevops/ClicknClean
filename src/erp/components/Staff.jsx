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
  Tag,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

const StaffTab = () => {
  const [loading, setLoading] = useState(false);

  // Dummy staff data
  const staff = [
    {
      id: 1,
      name: "Alice Johnson",
      phone: "+91 9876501234",
      email: "alice@example.com",
      role: "Cleaner",
      status: "Available",
      totalBookings: 40,
    },
    {
      id: 2,
      name: "Bob Smith",
      phone: "+91 9998887776",
      email: "bob@example.com",
      role: "Supervisor",
      status: "Busy",
      totalBookings: 25,
    },
  ];

  const columns = [
    { title: "Staff ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Available" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    { title: "Total Bookings", dataIndex: "totalBookings", key: "totalBookings" },
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
      {/* Header */}
      <div className="mil-flex mil-jcsb mil-aic mil-mb-20">
        <h2 className="mil-fs-20 mil-fw-600">Staff</h2>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Staff
        </Button>
      </div>

      {/* Summary Cards */}
      <Row gutter={16} className="mil-mb-20">
        <Col span={6}><Card title="Total Staff">25</Card></Col>
        <Col span={6}><Card title="Available">18</Card></Col>
        <Col span={6}><Card title="Busy">7</Card></Col>
        <Col span={6}><Card title="Total Bookings Assigned">120</Card></Col>
      </Row>

      {/* Filters */}
      <Space className="mil-mb-20" wrap>
        <Search placeholder="Search staff..." style={{ width: 200 }} />
        <Select placeholder="Role" style={{ width: 150 }}>
          <Select.Option value="cleaner">Cleaner</Select.Option>
          <Select.Option value="supervisor">Supervisor</Select.Option>
        </Select>
        <Select placeholder="Status" style={{ width: 150 }}>
          <Select.Option value="available">Available</Select.Option>
          <Select.Option value="busy">Busy</Select.Option>
        </Select>
      </Space>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={staff}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default StaffTab;