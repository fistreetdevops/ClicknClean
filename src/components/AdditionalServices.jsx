import React from "react";
import window_cleaning from "../assets/img/ui/icons/1.png";
import dry_cleaning from "../assets/img/ui/icons/2.png";
import post_construction from "../assets/img/ui/icons/3.png";
import pool_cleaning from "../assets/img/ui/icons/4.png";
import landscaping from "../assets/img/ui/icons/5.png";
import cosmetic_repairs from "../assets/img/ui/icons/6.png";
import by_agreement from "../assets/img/ui/icons/7.png";

const additionalServices = [
    {
        icon: window_cleaning,
        price: "from ₹59",
        title: "Window cleaning",
        link: "service-1.html",
    },
    {
        icon: dry_cleaning,
        price: "from ₹29",
        title: "Dry cleaning",
        link: "service-1.html",
    },
    {
        icon: post_construction,
        price: "from ₹219",
        title: "Post-construction",
        link: "service-1.html",
    },
    {
        icon: pool_cleaning,
        price: "from ₹99",
        title: "Pools cleaning",
        link: "service-1.html",
    },
    {
        icon: landscaping,
        price: "from ₹68",
        title: "landscaping",
        link: "service-1.html",
    },
    {
        icon: cosmetic_repairs,
        price: "from ₹1299",
        title: "Cosmetic repairs",
        link: "service-1.html",
    },
    {
        icon: by_agreement,
        price: "from ₹3 🙂",
        title: "By agreement",
        link: "service-1.html",
    },
];

const AdditionalServices = () => {
    return (
        <div className="mil-p-0-15">
            <div className="container">
                <div className="mil-section-title mil-mb-f mil-up">
                    <h2 className="mil-fs-36">Additional services</h2>
                    <div className="mil-dots"></div>
                    <b className="mil-fs-24">02</b>
                </div>

                <div className="row">
                    {additionalServices.map((service, index) => (
                        <div
                            className="col-sm-6 col-md-4 col-xl-3 mil-mb-15 mil-up"
                            key={index}
                        >
                            <a
                                href={service.link}
                                className="mil-service-card mil-bg-m-4 mil-br-md"
                            >
                                <div className="mil-jcb">
                                    <img
                                        src={service.icon}
                                        alt="icon"
                                        className="mil-card-icon mil-mb-30"
                                    />
                                    <span className="mil-up-text mil-m-1">{service.price}</span>
                                </div>
                                <h3 className="mil-fs-30 mil-mb-20 mil-lh-110 mil-mb-30">
                                    {service.title}
                                </h3>
                                <div>
                                    <div className="mil-btn mil-sm mil-bg-m-3 mil-br-xl mil-hover-bri-105 mil-hover-scale">
                                        Learn more
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;