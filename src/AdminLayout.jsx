import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./erp/pages/Dashboard";
import Sidebar from "./erp/pages/Sidebar";
import Topbar from "./erp/pages/TopBar";
import "./styles/style.css";
import Services from "./erp/pages/Services";
import ServiceCategories from "./erp/components/ServiceCategories";
import Bookings from "./erp/components/Bookings";
import ClientTab from "./erp/components/Clients";
import StaffTab from "./erp/components/Staff";

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="mil-flex mil-h-screen">
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} />

            {/* Main Content */}
            <div className="mil-flex mil-flex-col mil-w-100">
                <Topbar toggleSidebar={() => setCollapsed(!collapsed)} />

                {/* Scrollable Content Area */}
                <main className="mil-content-scroll">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/categories" element={<ServiceCategories />} />
                        <Route path="/bookings" element={<Bookings />} />
                        <Route path="/clients" element={<ClientTab />} />
                        <Route path="/staff" element={<StaffTab />} />
                        <Route path="*" element={<Navigate to="/admin" replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
