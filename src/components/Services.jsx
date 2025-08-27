import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdditionalServices from "./AdditionalServices";
import services from "../types/servicesData";
import emptycart from "../assets/img/gallery/cart.png";

const Services = () => {
    const location = useLocation();
    const isServicesRoot = location.pathname === "/services";
    const [selectedService, setSelectedService] = useState(services[0]);
    const [cart, setCart] = useState([]);

    return (
        <div className = "mil-p-5" style={{
            marginTop: isServicesRoot ? "4rem" : "0",
        }}>
            <div className="mil-p-f-15" id="scroll">
                <div className="container">
                    <div className="mil-section-title mil-mb-40 mil-up">
                        <h2 className="mil-fs-36">Services</h2>
                        <div className="mil-dots"></div>
                        <b className="mil-fs-24">01</b>
                    </div>

                    <div className="mil-row mil-mt-40">
                        <div
                            className="mil-column mil-mr-15"
                            style={{ flex: "0 0 25%", height: "100%" }}
                        >
                            <div
                                className="mil-bg-m-4 mil-br-md mil-p-3"
                                style={{
                                    border: "1px solid #eee",
                                    background: "#fff",
                                    height: "100%",
                                }}
                            >
                                {/* Header with line */}
                                <div className="mil-row mil-aic mil-mb-20">
                                    <h4
                                        className="mil-fs-20 mil-fw-600"
                                        style={{ whiteSpace: "nowrap", margin: 0 }}
                                    >
                                        Select a service
                                    </h4>
                                    <div
                                        style={{
                                            flex: 1,
                                            height: "1px",
                                            background: "#ddd",
                                            marginLeft: "12px",
                                        }}
                                    />
                                </div>
                                <div
                                    className="service-grid"
                                >
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className={`service-card mil-text-link mil-a-2 ${selectedService.id === service.id ? "active" : ""
                                                }`}
                                            onClick={() => setSelectedService(service)}
                                            style={{
                                                flex: "0 0 calc(50% - 16px)",
                                                boxSizing: "border-box",
                                                padding: "10px",
                                            }}
                                        >
                                            {/* Service Image */}
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                style={{
                                                    width: "100%",
                                                    height: "90px",
                                                    objectFit: "cover",
                                                    borderRadius: "6px",
                                                    marginBottom: "8px",
                                                }}
                                            />

                                            {/* Service Title */}
                                            <span className="mil-fs-16 mil-fw-500 service-title ">
                                                {service.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MIDDLE COLUMN - Services */}
                        <div className="mil-column mil-mr-30" style={{ flex: "0 0 45%" }}>
                            {selectedService && (
                                <div className="mil-bg-m-4 mil-br-md mil-p-3">
                                    <div className="mil-row mil-jcb">
                                        <div className="mil-column">
                                            <h3 className="mil-fs-24 mil-mb-15">{selectedService.title}</h3>
                                            <ul className="mil-column mil-gap-10 mil-mb-15">
                                                {selectedService.items.map((item, i) => (
                                                    <li key={i} className="mil-fs-18">
                                                        • {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                to={`/services/${selectedService.id}`}
                                                className="mil-text-link mil-a-2"
                                            >
                                                View details
                                            </Link>
                                        </div>

                                        <div className="mil-column">
                                            <img
                                                src={selectedService.image}
                                                alt={selectedService.title}
                                                className="mil-br-md mil-mb-15"
                                                style={{ width: "150px", height: "120px", objectFit: "cover" }}
                                            />
                                            <div style={{ display: "flex", justifyContent: "center" }}>

                                                <div
                                                    className="mil-btn mil-bg-a-1 mil-sm mil-br-lg mil-hover-bri-105 mil-hover-scale mil-md-hidden"
                                                    onClick={() => {
                                                        if (!cart.includes(selectedService)) {
                                                            setCart([...cart, selectedService]);
                                                        }
                                                    }}
                                                >
                                                    Book now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN - Cart */}
                        <div className="mil-column" style={{ flex: "0 0 25%" }}>

                            <div className="cart-box" style={{ border: "1px solid #eee", borderRadius: "8px", padding: "16px", background: "#fff" }}>
                                <div className="mil-row mil-aic mil-mb-20">
                                    <h4
                                        className="mil-fs-20 mil-fw-600"
                                        style={{ whiteSpace: "nowrap", margin: 0 }}
                                    >
                                        Your Cart
                                    </h4>
                                    <div
                                        style={{
                                            flex: 1,
                                            height: "1px",
                                            background: "#ddd",
                                            marginLeft: "12px",
                                        }}
                                    />
                                </div>

                                {cart.length === 0 ? (
                                    <div style={{ textAlign: "center", color: "#777", padding: "20px 0" }}>
                                        <img 
                                            src={emptycart}
                                            className="mil-br-md mil-mb-15"
                                            style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                        <p>Your cart is empty.</p>
                                    </div>

                                ) : (
                                    cart.map((item, index) => {
                                        const total = item.subservices.reduce(
                                            (sum, s) => sum + s.price,
                                            0
                                        ) * item.quantity;

                                        return (
                                            <div key={index} style={{ marginBottom: "20px" }}>
                                                {/* Title + Quantity + Price */}
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <h4 style={{ margin: 0, fontWeight: 600 }}>
                                                        {item.size ? `${item.size} - ${item.title}` : item.title}
                                                    </h4>

                                                    {/* Quantity selector */}
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                        <button
                                                            onClick={() => {
                                                                if (item.quantity > 1) {
                                                                    const newCart = [...cart];
                                                                    newCart[index].quantity -= 1;
                                                                    setCart(newCart);
                                                                }
                                                            }}
                                                            style={{ border: "1px solid #ddd", borderRadius: "50%", width: "28px", height: "28px" }}
                                                        >-</button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            onClick={() => {
                                                                const newCart = [...cart];
                                                                newCart[index].quantity += 1;
                                                                setCart(newCart);
                                                            }}
                                                            style={{ border: "1px solid #ddd", borderRadius: "50%", width: "28px", height: "28px" }}
                                                        >+</button>
                                                    </div>

                                                    <p style={{ margin: 0, fontWeight: 600, color: "#5E35B1" }}>
                                                        ₹{total}
                                                    </p>
                                                </div>

                                                {/* Subservices list */}
                                                <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
                                                    {item.subservices.map((s, i) => (
                                                        <li key={i} style={{ listStyleType: "disc", fontSize: "14px", color: "#555" }}>
                                                            {s.name} <span style={{ color: "#777" }}>₹{s.price}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })
                                )}

                                {/* Footer total + View Cart */}
                                {cart.length > 0 && (
                                    <div style={{ marginTop: "20px" }}>
                                        <div style={{
                                            display: "flex", justifyContent: "space-between",
                                            alignItems: "center", fontWeight: 600, marginBottom: "10px"
                                        }}>
                                            <span>Total</span>
                                            <span>
                                                ₹{cart.reduce((sum, item) =>
                                                    sum + item.subservices.reduce((s, sub) => s + sub.price, 0) * item.quantity, 0
                                                )}
                                            </span>
                                        </div>

                                        <button className="mil-btn mil-bg-a-1 mil-sm mil-br-lg mil-hover-bri-105 mil-hover-scale mil-md-hidden" style={{
                                            width: "100%"
                                        }}>
                                            View Cart
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="mil-bg-m-4 mil-br-md mil-p-3 mil-mt-15">
                                <h4 className="mil-fs-20 mil-mb-15">Special Offers</h4>
                                <a href="#" className="mil-text-link mil-a-2">
                                    View more offers
                                </a>
                            </div>

                            <div className="mil-bg-m-4 mil-br-md mil-p-3 mil-mt-15">
                                <h5 className="mil-fs-18 mil-mb-15">UC Promise</h5>
                                <ul className="mil-column mil-gap-10">
                                    <li>✔ Verified Professionals</li>
                                    <li>✔ Safe Chemicals</li>
                                    <li>✔ Superior Stain Removal</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <AdditionalServices />
        </div>
    );
};

export default Services;