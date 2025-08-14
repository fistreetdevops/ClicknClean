import React from "react";
import { Link, useLocation } from "react-router-dom";
import AdditionalServices from "./AdditionalServices";

const services = [
    {
        id: "apartment-cleaning",
        title: "Apartment cleaning",
        items: [
            "Dust all surfaces",
            "Mop floors",
            "Clean kitchen surfaces",
            "Disinfect bathroom and toilet",
            "Take out trash",
        ],
    },
    {
        id: "home-cleaning",
        title: "Home cleaning",
        items: [
            "Dust all surfaces",
            "Mop floors",
            "Clean kitchen surfaces",
            "Disinfect bathroom and toilet",
            "Take out trash",
        ],
    },
    {
        id: "office-cleaning",
        title: "Office cleaning",
        items: [
            "Disinfect desks and phones",
            "Mop floors",
            "Polish glass surfaces",
            "Disinfect restrooms",
            "Take out trash",
        ],
    },
    {
        id: "specialized-cleaning",
        title: "Specialized cleaning",
        items: [
            "Warehouse Cleaning",
            "Abandoned Property Cleaning",
            "Outdoor Area Cleaning",
            "High-Level Dusting",
            "Industrial Cleaning",
        ],
    },
];

const Services = () => {
    const location = useLocation();
    const isServicesRoot = location.pathname === "/services";
    return (
        <div style={{
                padding: "5rem",
                marginTop: isServicesRoot ? "4rem" : "0",
            }}>
            <div className="mil-p-f-15" id="scroll">
                <div className="container">
                    <div className="mil-section-title mil-mb-f mil-up">
                        <h2 className="mil-fs-36">Basic services</h2>
                        <div className="mil-dots"></div>
                        <b className="mil-fs-24">01</b>
                    </div>

                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-6 mil-mb-15 mil-up">
                                <div className="mil-service-card mil-bg-m-4 mil-br-md">
                                    <div className="row">
                                        <div className="col-sm-5 mil-column mil-jcb mil-sm-mb-40">
                                            <h3 className="mil-fs-30 mil-mb-30 mil-lh-110">
                                                {service.title.split(" ")[0]}{" "}
                                                <br className="mil-sm-hidden" />
                                                {service.title.split(" ")[1] || ""}
                                            </h3>
                                            <div>
                                                <Link
                                                    to={`/services/${service.id}`}
                                                    className="mil-link mil-m-4"
                                                >
                                                    Learn more
                                                    <i className="far fa-arrow-right mil-bg-a-1 mil-m-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-7">
                                            <ul className="mil-check-list">
                                                {service.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AdditionalServices />
        </div>
    );
};

export default Services;