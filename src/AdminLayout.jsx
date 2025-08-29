import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./erp/pages/Dashboard";
import Sidebar from "./erp/pages/Sidebar";
import Topbar from "./erp/pages/TopBar";
import "./styles/style.css";

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
                        <Route path="*" element={<Navigate to="/admin" replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}
