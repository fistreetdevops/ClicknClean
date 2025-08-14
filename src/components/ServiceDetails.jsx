import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { servicesData } from "../types/servicesData";

const ServiceDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const service = servicesData.find((s) => s.id === id);

    const isServicesRoot = location.pathname === "/services";

    if (!service) {
        return (
            <div className="container mil-up mil-tac" style={{
                padding: "5rem",
                marginTop: "70px",
            }}>
                <h2>Service not found</h2>
                <Link to="/services" className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-scale">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="container mil-p-f-60" style={{
            padding: "5rem",
            marginTop: "70px",
        }}>
            {/* Service Image */}
            <div className="mil-up mil-mb-40">
                <img
                    src={service.image}
                    alt={service.title}
                    style={{
                        width: "100%",
                        borderRadius: "10px",
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* Service Title */}
            <h1 className="mil-fs-44 mil-mb-20">{service.title}</h1>
            <p className="mil-fs-18 mil-mb-40" style={{ opacity: 0.8 }}>
                {service.description}
            </p>

            {/* Features */}
            <h3 className="mil-fs-28 mil-mb-20">Our Service Includes:</h3>
            <ul className="mil-fs-18 mil-mb-40">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="mil-mb-10">
                        <i className="far fa-check mil-mr-10 mil-bg-a-1 mil-a-1"></i> {feature}
                    </li>
                ))}
            </ul>

            {/* Back Button */}
            <Link to="/services" className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-scale">
                Back to Services
            </Link>
        </div>
    );
};

export default ServiceDetails;