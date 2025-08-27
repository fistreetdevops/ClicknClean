import React from "react";

const ServicePopup = ({ open, onClose, service, onSelect }) => {
  if (!open || !service) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          Select Options for {service.title}
        </h3>

        {/* Apartment / Home options */}
        {service.categories && (
          <div style={{ marginBottom: "15px" }}>
            <h4>Categories</h4>
            <ul>
              {service.categories.map((cat, i) => (
                <li key={i}>
                  <button
                    style={{
                      padding: "6px 12px",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      margin: "5px 0",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    onClick={() => onSelect(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Subservices */}
        {service.subservices && (
          <div style={{ marginBottom: "15px" }}>
            <h4>Subservices</h4>
            <ul>
              {service.subservices.map((s, i) => (
                <li key={i}>
                  <label>
                    <input type="checkbox" /> {s.name} - ₹{s.price}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#5E35B1",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServicePopup;