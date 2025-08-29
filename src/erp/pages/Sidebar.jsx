import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../../styles/style.css";
import logo from "./../../assets/img/logo/logo-green-white.png";

export default function Sidebar({ collapsed }) {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: "fas fa-home" },
    { path: "/admin/bookings", label: "Bookings", icon: "fas fa-calendar-check" },
    { path: "/admin/clients", label: "Clients", icon: "fas fa-users" },
    { path: "/admin/staff", label: "Staff", icon: "fas fa-user-tie" },
    { path: "/admin/services", label: "Services", icon: "fas fa-broom" },
    { path: "/admin/invoices", label: "Invoices", icon: "fas fa-file-invoice" },
    { path: "/admin/reports", label: "Reports", icon: "fas fa-chart-line" },
    { path: "/admin/settings", label: "Settings", icon: "fas fa-cog" },
  ];

  return (
    <div
      className={`mil-br-sm mil-h-screen transition-all duration-300 ${collapsed ? "mil-w-60" : "mil-w-250"
        }`}
      style={{ backgroundColor: "#263544" }}
    >
      {/* Logo */}
      <div className="mil-p-3 mil-flex mil-aic mil-jcc">
        {collapsed ? (
          <img src={logo} alt="Logo" className="mil-br-md" width={40} />
        ) : (
          <div className="mil-flex mil-aic mil-gap-2">
            <img src={logo} alt="Logo" className="mil-br-md" width={40} />
            <span className="mil-fs-20 mil-fw-700 gradient-text">
              Click’n’Clean
            </span>
          </div>
        )}
      </div>

      {/* Menu */}
      <ul
        className="mil-list-none mil-p-1 mil-fs-18"
        style={{ color: "whitesmoke" }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="mil-mb-5 ">
              <Link
                to={item.path}
                className={`mil-flex mil-aic mil-p-2 mil-br-md transition-all ${collapsed ? "mil-jcc" : "mil-gap-2"
                  } ${isActive
                    ? "mil-bg-a-1 mil-fw-600 text-white"
                    : "hover:mil-bg-m-3"
                  }`}
              >
                <i className={`${item.icon} mil-fs-18`} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

}
