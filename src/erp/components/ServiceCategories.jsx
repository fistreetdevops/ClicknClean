import React, { useState, useEffect } from "react";
import {
    Button,
    Form,
    Input,
    Modal,
    Select,
    Upload,
    Table,
    Space,
    Tag,
    Popconfirm,
    message,
} from "antd";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    UploadOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";

const ServiceCategories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingServiceCategory, setEditingServiceCategory] = useState(null);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [save, setSave] = useState(false);
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "http://18.60.181.218:8180/app/clicknclean/v1/rest/get/servicecategory"
            );
            setCategories(response.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async () => {
        try {
            setSave(true);
            const values = await form.validateFields();
            const formData = new FormData();
            formData.append("servicecategory", values.servicecategory);
            formData.append("visible_status", values.visible_status);

            if (values.thumbnail && values.thumbnail.length > 0) {
                formData.append("thumbnail", values.thumbnail[0].originFileObj);
            }

            if (editingServiceCategory) {
                // Update
                await axios.put(
                    `http://18.60.181.218:8180/app/clicknclean/v1/rest/update/servicecategory/${editingServiceCategory.id}`,
                    formData
                );
                message.success("Service Category updated successfully!");
            } else {
                // Create
                await axios.post(
                    "http://18.60.181.218:8180/app/clicknclean/v1/rest/create/servicecategory",
                    // "http://192.168.1.8:8080/app/clicknclean/v1/rest/create/servicecategory",
                    formData
                );
                message.success("Service Category added successfully!");
            }
            fetchData();
            setIsModalOpen(false);
            setEditingServiceCategory(null);
            form.resetFields();
        } catch (error) {
            console.error("Error saving category:", error);
            message.error("Failed to save category.");
        }
        finally {
            setSave(false);
        }
    };

    // Delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://18.60.181.218:8180/app/clicknclean/v1/rest/delete/servicecategory/${id}`
            );
            message.success("Deleted successfully!");
            fetchData();
        } catch (error) {
            console.error("Error deleting category:", error);
            message.error("Failed to delete category.");
        }
    };

    const columns = [
        {
            title: "Category Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <Space>
                    <img
                        src={record.image}
                        alt={text}
                        width={32}
                        height={32}
                        style={{ borderRadius: 6 }}
                    />
                    <span>{text}</span>
                </Space>
            ),
        },
        { title: "Slug", dataIndex: "slug", key: "slug" },
        { title: "Services", dataIndex: "services", key: "services" },
        { title: "Bookings", dataIndex: "bookings", key: "bookings" },
        { title: "Revenue", dataIndex: "revenue", key: "revenue" },
        { title: "Last Updated", dataIndex: "lastUpdated", key: "lastUpdated" },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) =>
                status === "Active" ? (
                    <Tag color="green">Active</Tag>
                ) : (
                    <Tag color="red">Inactive</Tag>
                ),
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button type="text" icon={<EyeOutlined />} />
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => {
                            setEditingServiceCategory(record);
                            setIsModalOpen(true);
                            form.setFieldsValue({
                                servicecategory: record.name,
                                visible_status: record.status,
                                thumbnail: [],
                            });
                        }}
                    />
                    <Popconfirm
                        title="Are you sure to delete this category?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="text" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="mil-p-4">
            <div className="mil-flex mil-jcsb mil-aic mil-mb-20">
                <h2 className="mil-fs-20 mil-fw-600">Categories</h2>
                <Button
                    type="primary"
                    onClick={() => {
                        setEditingServiceCategory(null);
                        form.resetFields();
                        setIsModalOpen(true);
                    }}
                    icon={<PlusOutlined />}
                >
                    Add Category
                </Button>
            </div>
            <Input.Search placeholder="Search category..." className="mil-mb-20" />
            <Table
                dataSource={categories}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 8 }}
                loading={loading}
            />
            <Modal
                title={editingServiceCategory ? "Edit Service Category" : "Add Service Category"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button
                        key="save"
                        type="primary"
                        loading={saving}
                        onClick={handleSave}
                    >
                        Save
                    </Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="servicecategory"
                        label="Service Category Name"
                        rules={[{ required: true, message: "Please enter service category" }]}
                    >
                        <Input placeholder="Enter service category" />
                    </Form.Item>

                    <Form.Item
                        name="visible_status"
                        label="Status"
                        rules={[{ required: true, message: "Please select status" }]}
                    >
                        <Select
                            placeholder="Select status"
                            options={[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="thumbnail"
                        label="Image"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                    >
                        <Upload listType="picture" beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default ServiceCategories;