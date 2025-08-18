import React, { useState } from "react";
import "../styles/style.css";
import write from "../assets/img/ui/icons/13.svg";
import call from "../assets/img/ui/icons/14.svg";
import come from "../assets/img/ui/icons/15.svg";
import bgImage from "../assets/img/ui/bg.png";
import t5Image from "../assets/img/ui/t5.jpg";
import cont2Image from "../assets/img/ui/cont-2.jpg";
import user1 from "../assets/img/users/1.jpg";
import user2 from "../assets/img/users/2.jpg";
import user3 from "../assets/img/users/3.jpg";
import user4 from "../assets/img/users/4.jpg";
import starSvg from "../assets/img/ui/star.svg";
import discountSvg from "../assets/img/ui/discount.svg";
import { Link } from "react-router-dom";
import GoogleMapEmbed from "./GoogleMapEmbed";

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("Services");

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (value) => {
        setSelectedService(value);
        setIsOpen(false);
    };
    return (
        <div className="mil-page-wrapper">

            {/* Contact form + map */}
            <div className="mil-p-f-30" id="scroll">
                <div className="container">
                    <div className="mil-section-title mil-mb-f mil-up">
                        <h2 className="mil-fs-36">Request for Quote</h2>
                        <div className="mil-dots"></div>
                        <b className="mil-fs-24">01</b>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mil-mb-15 mil-up">
                            <div className="mil-hero-form-frame mil-bg-m-4 mil-br-md">
                                <div className="mil-aic mil-column">
                                    <h3 className="mil-fs-32 mil-tac mil-lh-140 mil-mb-60">
                                        We accept your requests <br />24 hours a day, 7 days a week
                                    </h3>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-6 mil-mb-15">
                                            <div className="mil-input-frame">
                                                <input type="text" id="user-name" name="user-name" placeholder="Name" className="mil-br-md mil-bg-m-3" autocomplete="name" />
                                                <i className="far fa-user mil-a-2"></i>
                                            </div>
                                        </div>
                                        <div className="col-6 mil-mb-15">
                                            <div className="mil-input-frame">
                                                <input type="email" id="user-email" name="user-email" placeholder="Email" className="mil-br-md mil-bg-m-3" autocomplete="email" />
                                                <i className="far fa-at mil-a-2"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mil-mb-15">
                                            <div className="mil-input-frame">
                                                <input type="tel" id="user-phone" name="user-tel" className="mil-phone-input mil-br-md mil-bg-m-3" placeholder="+91 ____-____" autocomplete="tel" />
                                                <i className="far fa-mobile mil-a-2"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mil-mb-15">
                                            <div className="mil-input-frame mil-custom-select">
                                                {/* Dropdown trigger */}
                                                <div
                                                    className="mil-select-button mil-br-md mil-bg-m-3 mil-m-1"
                                                    onClick={toggleDropdown}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <span className="mil-selected-value">{selectedService}</span>
                                                    <i className="far fa-chevron-down mil-a-2"></i>
                                                </div>

                                                <ul
                                                    className={`mil-select-dropdown mil-br-md ${isOpen ? "open" : ""}`}
                                                >
                                                    {[
                                                        "Apartment cleaning",
                                                        "Home cleaning",
                                                        "Office cleaning",
                                                        "Window cleaning",
                                                        "Dry cleaning",
                                                    ].map((service, index) => (
                                                        <li key={index}>
                                                            <input
                                                                type="radio"
                                                                id={`option${index + 1}`}
                                                                name="select"
                                                                value={service}
                                                                onChange={() => handleSelect(service)}
                                                                checked={selectedService === service}
                                                            />
                                                            <label htmlFor={`option${index + 1}`}>{service}</label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mil-mb-30">
                                            <div className="mil-input-frame mil-type-2">
                                                <textarea id="message" name="message" placeholder="Enter your message" className="mil-br-md mil-bg-m-3" autocomplete="off"></textarea>
                                                <i className="far fa-comment-alt mil-a-2"></i>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mil-aic">
                                            <p className="mil-fs-14 mil-m-2">By clicking the send button, you agree to the rules for processing personal data</p>
                                            <button className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-hover-scale mil-ml-60 mil-sm-ml-30" type="submit">Send requests</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mil-mb-15 mil-up">
                            <div className="frame">
                                <GoogleMapEmbed />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mil-p-0-f">
                <div className="container">
                    <div className="mil-section-title mil-mb-f mil-up">
                        <h2 className="mil-fs-36">Contact info</h2>
                        <div className="mil-dots"></div>
                        <b className="mil-fs-24">02</b>
                    </div>
                    <div className="mil-features mil-bg-m-4 mil-br-md mil-up">
                        <div className="row">
                            <div className="col-lg-4 mil-tac mil-mb-60">
                                <img src={write} alt="icon" className="mil-card-icon mil-mb-30" />
                                <h3 className="mil-fs-30 mil-mb-20 mil-lh-110">Write</h3>
                                <p className="mil-fs-18 mil-mb-5">clickNclean.mailbox@mail.com</p>
                                <p className="mil-fs-18">clickNclean.office@mail.com</p>
                            </div>
                            <div className="col-lg-4 mil-tac mil-mb-60">
                                <img src={call} alt="icon" className="mil-card-icon mil-mb-30" />
                                <h3 className="mil-fs-30 mil-mb-20 mil-lh-110">Call</h3>
                                <p className="mil-fs-18 mil-mb-5">+91 99999-XXX90</p>
                                <p className="mil-fs-18">+91 99999-XXX90</p>
                            </div>
                            <div className="col-lg-4 mil-tac mil-mb-60">
                                <img src={come} alt="icon" className="mil-card-icon mil-mb-30" />
                                <h3 className="mil-fs-30 mil-mb-20 mil-lh-110">Come</h3>
                                <p className="mil-fs-18 mil-lh-160">71 South Los Carneros Road, <br />Goleta, California 93117</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mil-dots mil-up"></div>
            </div>

            <div className="mil-p-ff mil-relative">
                <img
                    src={bgImage}
                    alt="background"
                    className="mil-bg"
                    style={{ top: "-10rem" }}
                />

                <div className="container">
                    <div className="row">
                        {/* CTA Left */}
                        <div className="col-lg-7 mil-mb-15">
                            <div className="mil-cta mil-br-lg mil-bg-a-1 mil-aicb mil-up">
                                <div className="row mil-jcb">
                                    <div className="col-lg-6 mil-mb-30">
                                        <h5 className="mil-fs-32 mil-m-1">
                                            Highly skilled professionals are always at your service.
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 mil-jce mil-md-jcs mil-mb-30">
                                        <Link
                                            to="/price-calculator"
                                            className="mil-btn mil-icon-btn mil-bg-m-1 mil-m-4 mil-br-xl mil-hover-bri-105 mil-hover-scale"
                                        >
                                            Price calculator
                                            <i className="far fa-arrow-right mil-bg-a-1 mil-m-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Right */}
                        <div className="col-lg-5 mil-mb-15">
                            <div className="mil-cta mil-br-lg mil-bg-m-4 mil-jcc mil-column mil-up">
                                <h5 className="mil-fs-22 mil-md-fs-32 mil-m-1 mil-mb-15 mil-md-mb-30">
                                    We accept your requests 24 hours a day, 7 days a week
                                </h5>
                                <Link to="/services" className="mil-link mil-m-1 mil-mb-15">
                                    Our Services
                                    <i className="far fa-arrow-right mil-bg-m-3 mil-m-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="row">
                        <div className="col-lg-6 mil-md-mb-15 mil-up">
                            <div className="mil-text-side">
                                <div className="mil-box-bg">
                                    <img src={t5Image} alt="bg" />
                                </div>
                                <div className="mil-text-frame">
                                    <div className="mil-aic mil-mb-20">
                                        {/* SVG */}
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 89 89"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mil-mr-15"
                                        >
                                            <rect
                                                x="42.1406"
                                                y="13.0017"
                                                width="3.46874"
                                                height="62.7841"
                                                fill="#F6D62D"
                                            />
                                            <rect
                                                x="13.0078"
                                                y="45.2607"
                                                width="3.46874"
                                                height="62.7841"
                                                transform="rotate(-90 13.0078 45.2607)"
                                                fill="#F6D62D"
                                            />
                                            <rect
                                                x="21.5859"
                                                y="22.8096"
                                                width="3.46874"
                                                height="62.7841"
                                                transform="rotate(-45 21.5859 22.8096)"
                                                fill="#F6D62D"
                                            />
                                            <rect
                                                x="22.8125"
                                                y="67.2046"
                                                width="3.46874"
                                                height="62.7841"
                                                transform="rotate(-135 22.8125 67.2046)"
                                                fill="#F6D62D"
                                            />
                                        </svg>
                                        <p>
                                            We clean objects of any <br /> complexity and size in 6-9
                                            hours
                                        </p>
                                    </div>
                                    <h2 className="mil-sm-fs-44 mil-fs-72 mil-m-3 mil-lh-110 mil-mb-30">
                                        Cleaning subscription:
                                    </h2>
                                    <p className="mil-fs-24 mil-mb-40">
                                        Your home gleams brilliantly <br /> while you relax.
                                    </p>
                                    <div className="mil-buttons-frame">
                                        <Link
                                            to="/subscription"
                                            className="mil-btn mil-icon-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-hover-scale mil-mr-30"
                                        >
                                            Subscribe now
                                            <i className="far fa-plus mil-bg-m-1 mil-a-1"></i>
                                        </Link>
                                        <Link
                                            to="/subscription"
                                            className="mil-link mil-m-4"
                                        >
                                            Learn more
                                            <i
                                                className="far fa-arrow-right mil-bg-a-1 mil-m-1"
                                                style={{ padding: ".2rem 0 0 .2rem" }}
                                            ></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="col-lg-6 mil-up">
                            <div className="mil-image-part">
                                <div className="mil-cover-frame">
                                    <img
                                        src={cont2Image}
                                        alt="bg"
                                        className="mil-scale-img"
                                        data-value-1="1.15"
                                        data-value-2="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Cards */}
                    <div className="mil-hero-cards-frame">
                        <div className="row">
                            {/* Users Card */}
                            <div className="col-lg-7 col-xxl-4 mil-mb-15 mil-up">
                                <div className="mil-hero-users-card mil-bg-a-2 mil-br-md">
                                    <div className="mil-aic mil-mb-30">
                                        <ul className="mil-users-inline">
                                            <li>
                                                <img src={user1} alt="User" />
                                            </li>
                                            <li>
                                                <img src={user2} alt="User" />
                                            </li>
                                            <li>
                                                <img src={user3} alt="User" />
                                            </li>
                                            <li>
                                                <img src={user4} alt="User" />
                                            </li>
                                        </ul>
                                        <span className="mil-fs-32 mil-fw-700 mil-m-4 mil-ml-30">
                                            117+
                                        </span>
                                    </div>
                                    <p
                                        className="mil-fs-18 mil-m-4 mil-mr-15 mil-sm-mr-0"
                                        style={{ opacity: 0.7 }}
                                    >
                                        More than 117+ customers have already appreciated all our
                                        advantages. Try it for yourself!
                                    </p>
                                </div>
                            </div>

                            {/* Reviews Card */}
                            <div className="col-lg-5 col-xxl-3 mil-mb-15 mil-up">
                                <div className="mil-hero-reviews-card mil-bg-m-4 mil-br-md">
                                    <h3 className="mil-fs-32 mil-mb-30 mil-m-1">
                                        Want to learn more about our services?
                                    </h3>
                                    <Link to="/services" className="mil-link mil-m-1">
                                        Yes, I do{" "}
                                        <i
                                            className="far fa-arrow-right mil-bg-a-1 mil-m-1"
                                            style={{ padding: ".2rem 0 0 .2rem" }}
                                        ></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Discount Card */}
                            <div className="col-lg-12 col-xxl-5 mil-mb-15 mil-up">
                                <div className="mil-discount-card mil-hover-move mil-call-popup">
                                    <div className="mil-text-part mil-aic mil-bg-a-1">
                                        <div className="mil-aic">
                                            <div className="mil-dscnt-star mil-invert">
                                                <img src={starSvg} alt="star" />
                                                <div className="mil-fs-40 mil-lh-100 mil-m-3 mil-fw-700">
                                                    <span className="mil-counter" data-number="50">
                                                        50
                                                    </span>
                                                    %
                                                </div>
                                            </div>
                                            <div>
                                                <p className="mil-m-1 mil-mb-15 mil-opacity-7">
                                                    Hurry up!
                                                </p>
                                                <h3 className="mil-fs-32 mil-mb-20">
                                                    Discount for the first cleaning{" "}
                                                    <span className="mil-m-4">*</span>
                                                </h3>
                                                <p className="mil-m-1 mil-opacity-7">
                                                    Limited time offer!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mil-dscnt-part">
                                        <img src={discountSvg} alt="discount" />
                                        <div className="mil-up-text mil-m-4">Get it now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
