import React, { useState } from "react";
import { Table, Input, Button, Modal, Form, Select, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

const { Option } = Select;

const Services = () => {
    const [services, setServices] = useState([
        { id: 1, name: "Deep Cleaning", description: "Full house cleaning", status: "Active" },
        { id: 2, name: "Carpet Cleaning", description: "Carpet wash & dry", status: "Inactive" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [lodading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const openModal = (service = null) => {
        setEditingService(service);
        setIsModalOpen(true);
        if (service) {
            form.setFieldsValue(service);
        } else {
            form.resetFields();
        }
    };

    const handleSave = () => {
        form.validateFields().then((values) => {
            if (editingService) {
                setServices(
                    services.map((s) => (s.id === editingService.id ? { ...s, ...values } : s))
                );
            } else {
                setLoading(true);
                setServices([...services, { id: Date.now(), ...values }]);
            }
            setIsModalOpen(false);
            setEditingService(null);
            form.resetFields();
        });
    };

    const handleDelete = (id) => {
        setServices(services.filter((s) => s.id !== id));
    };

    const columns = [
        { title: "Service Name", dataIndex: "name", key: "name" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Status", dataIndex: "status", key: "status" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => openModal(record)}
                    />
                    <Button
                        type="link"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="mil-p-4">
            <div className="mil-flex mil-jcsb mil-aic mil-mb-20">
                <h2 className="mil-fs-20 mil-fw-600">Services</h2>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => openModal()}
                >
                    Add Service
                </Button>
            </div>
            <Space className="mil-mb-20" wrap>
                    <Search placeholder="Search services..." style={{ width: 200 }} />
                    <Select placeholder="Status" style={{ width: 150 }}>
                      <Select.Option value="active">Active</Select.Option>
                      <Select.Option value="inactive">Inactive</Select.Option>
                    </Select>
                  </Space>
            
            <Table
                columns={columns}
                dataSource={services}
                rowKey="id"
                // loading={loading}
                pagination={{ pageSize: 5 }}
            />
            <Modal
                title={editingService ? "Edit Service" : "Add Service"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleSave}
                okText="Save"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Service Name"
                        rules={[{ required: true, message: "Please enter service name" }]}
                    >
                        <Input placeholder="Enter service name" />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: "Please enter description" }]}
                    >
                        <Input.TextArea rows={3} placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[{ required: true, message: "Please select status" }]}
                    >
                        <Select placeholder="Select status">
                            <Option value="Active">Active</Option>
                            <Option value="Inactive">Inactive</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Services;