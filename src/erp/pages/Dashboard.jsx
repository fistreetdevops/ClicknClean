import React, { useEffect, useState } from "react";
import { Avatar, Card, Table } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { LuCircleCheck, LuCircleX } from "react-icons/lu";

const Dashboard = () => {
  const [holidays, setHolidays] = useState([]);
  const [pendingLeaves, setPendingLeaves] = useState([
    {
      id: 1,
      name: "Ajay",
      reason: "Fever",
      date: "2025-07-11",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Vikas ",
      reason: "Family Event",
      date: "2025-07-12",
      profile: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ]);
  const [approvedLeaves, setApprovedLeaves] = useState([]);

  useEffect(() => {
    fetch(
      "https://calendarific.com/api/v2/holidays?api_key=IOTDYsyR4diBoJSqhFWgyPIucQoSCmmP&country=IN&year=2025"
    )
      .then((res) => res.json())
      .then((data) => {
        const allHolidays = data?.response?.holidays || [];
        const today = new Date();

        const upcomingHolidays = allHolidays
          .filter((holiday) => {
            const iso = holiday?.date?.iso;
            if (!iso) return false;
            const holidayDate = new Date(iso);
            return !isNaN(holidayDate.getTime()) && holidayDate >= today;
          })
          .sort(
            (a, b) =>
              new Date(a.date.iso).getTime() - new Date(b.date.iso).getTime()
          );

        setHolidays(upcomingHolidays);
      })
      .catch((error) => console.error("Failed to fetch holidays:", error));
  }, []);

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime())
      ? date.toLocaleDateString("en-IN", { weekday: "long" })
      : "-";
  };

  const yearData = [
    { m: "Jan", b: 30 },
    { m: "Feb", b: 45 },
    { m: "Mar", b: 60 },
    { m: "Apr", b: 50 },
    { m: "May", b: 70 },
    { m: "Jun", b: 90 },
    { m: "Jul", b: 100 },
    { m: "Aug", b: 80 },
    { m: "Sep", b: 60 },
    { m: "Oct", b: 70 },
    { m: "Nov", b: 85 },
    { m: "Dec", b: 95 },
  ];

  const bookedServicesData = [
    {
      key: 1,
      name: "Ajay",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      service: "Deep Cleaning",
      customer: "John Doe",
      date: "2025-06-28",
      status: "Completed",
    },
    {
      key: 2,
      name: "Akshay",
      profile: "https://randomuser.me/api/portraits/men/44.jpg",
      service: "Window Cleaning",
      customer: "Jane Smith",
      date: "2025-06-29",
      status: "Pending",
    },
    {
      key: 3,
      name: "Vijay",
      profile: "https://randomuser.me/api/portraits/men/21.jpg",
      service: "Carpet Cleaning",
      customer: "Mike Lee",
      date: "2025-06-30",
      status: "In Progress",
    },
    {
      key: 4,
      name: "Ishan",
      profile: "https://randomuser.me/api/portraits/men/56.jpg",
      service: "Office Cleaning",
      customer: "Sarah Kim",
      date: "2025-07-01",
      status: "Completed",
    },
  ];

  const bookedServicesColumns = [
    {
      title: "Profile",
      dataIndex: "profile",
      key: "profile",
      render: (url) => <Avatar src={url} />,
    },
    { title: "Service Person", dataIndex: "name", key: "name" },
    { title: "Service Name", dataIndex: "service", key: "service" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const handleApprove = (id) => {
    const approved = pendingLeaves.find((leave) => leave.id === id);
    if (approved) {
      setApprovedLeaves([...approvedLeaves, approved]);
      setPendingLeaves(pendingLeaves.filter((leave) => leave.id !== id));
    }
  };

  const handleDecline = (id) => {
    setPendingLeaves(pendingLeaves.filter((leave) => leave.id !== id));
  };

  return (
    <div className="mil-grid-2 mil-gap-4 mil-p-3">
      {/* Chart */}
      <div className="mil-card">
        <h2 className="mil-fs-16 mil-fw-600 mil-mb-2">
          Completed Services Overview
        </h2>
        <ResponsiveContainer width="100%" height={250} style={{ marginTop: "70px", paddingRight:"30px" }}>
          <LineChart data={yearData}>
            <XAxis dataKey="m" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="b" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Holidays */}
      <div className="mil-card mil-overflow-auto mil-h-400">
        <h2 className="mil-fs-15 mil-fw-600 mil-mb-2">
          🗓️ Holidays and Festival – 2025
        </h2>
        <table className="mil-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Holiday</th>
            </tr>
          </thead>
          <tbody>
            {holidays.length > 0 ? (
              holidays.map((holiday, index) => (
                <tr key={index}>
                  <td>{holiday.date?.iso?.slice(0, 10) || "N/A"}</td>
                  <td>{getDayName(holiday.date?.iso)}</td>
                  <td>{holiday.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="mil-text-center mil-text-m-3">
                  No upcoming holidays found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Booked Services */}
      <div className="mil-card mil-col-2">
        <Card title="Booked Services Table" bordered={false} className="mil-card">
          <Table
            columns={bookedServicesColumns}
            dataSource={bookedServicesData}
            pagination={{ pageSize: 4 }}
          />
        </Card>
      </div>

      {/* Leave Requests */}
      <div className="mil-card">
        <h1 className="mil-fs-15 mil-fw-600 mil-text-center mil-mb-2">
          New Leave Requests
        </h1>

        {pendingLeaves.length > 0 ? (
          pendingLeaves.map((leave) => (
            <div key={leave.id} className="mil-card mil-mb-2">
              <div className="mil-flex mil-aic mil-gap-2">
                <Avatar src={leave.profile} />
                <p className="mil-fw-500">{leave.name}</p>
              </div>

              <div className="mil-flex mil-jcsb mil-aic">
                <span>
                  <strong>Reason:</strong> {leave.reason}
                </span>
                <span className="mil-flex mil-gap-2">
                  <LuCircleCheck
                    onClick={() => handleApprove(leave.id)}
                    className="mil-text-success mil-cursor"
                    style={{width:"30px", height:"30px"}}
                  />
                  <LuCircleX
                    onClick={() => handleDecline(leave.id)}
                    className="mil-text-danger mil-cursor"
                    style={{width:"30px", height:"30px"}}
                  />
                </span>
              </div>

              <p>
                <strong>Date:</strong> {leave.date} ({getDayName(leave.date)})
              </p>
            </div>
          ))
        ) : (
          <p className="mil-text-center mil-text-m-3">No pending requests</p>
        )}

        {approvedLeaves.length > 0 && (
          <div className="mil-mt-3">
            <h2 className="mil-fs-15 mil-fw-600">✅ Approved Leaves</h2>
            {approvedLeaves.map((leave) => (
              <div key={leave.id} className="mil-card mil-bg-m-2 mil-mt-2">
                <div className="mil-flex mil-aic mil-gap-2">
                  <Avatar src={leave.profile} />
                  <p className="mil-fw-500">{leave.name}</p>
                </div>
                <p>
                  <strong>Reason:</strong> {leave.reason}
                </p>
                <p>
                  <strong>Date:</strong> {leave.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;