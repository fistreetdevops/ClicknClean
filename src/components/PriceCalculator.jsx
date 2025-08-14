import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PriceCalculator = () => {
    const [cleaningType, setCleaningType] = useState("basic-cleaning");
    const [propertyType, setPropertyType] = useState("apartment");
    const [area, setArea] = useState(90);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const location = useLocation();
    const isServicesRoot = location.pathname === "/calculator";
    const [additionalServices, setAdditionalServices] = useState({
        cb1: true,
        cb2: true,
        cb3: false,
        cb4: false,
        cb5: false,
        cb6: false,
        cb7: false,
        cb8: false,
        cb9: false,
        cb10: false,
        cb11: false,
        cb12: false,
        cb13: false,
        cb14: false,
        cb15: false,
        cb16: false,
    });

    const cleaningPrices = {
        "basic-cleaning": { apartment: 90, house: 120, office: 140, industrial: 180 },
        "general-cleaning": { apartment: 120, house: 150, office: 180, industrial: 200 },
        "post-construction": { apartment: 150, house: 180, office: 210, industrial: 240 },
    };

    const servicePrices = {
        cb1: 15,
        cb2: 30,
        cb3: 25,
        cb4: 20,
        cb5: 15,
        cb6: 60,
        cb7: 30,
        cb8: 25,
        cb9: 20,
        cb10: 15,
        cb11: 30,
        cb12: 25,
        cb13: 20,
        cb14: 20,
        cb15: 10,
        cb16: 20,
    };

    const toggleService = (id) => {
        setAdditionalServices({
            ...additionalServices,
            [id]: !additionalServices[id],
        });
    };

    const updateRoomCount = (room, delta) => {
        if (room === "bedrooms") {
            setBedrooms(Math.max(1, bedrooms + delta));
        } else {
            setBathrooms(Math.max(1, bathrooms + delta));
        }
    };

    const calculateTotal = () => {
        const base = cleaningPrices[cleaningType][propertyType] * (area / 90);
        const serviceTotal = Object.entries(additionalServices).reduce(
            (sum, [key, value]) => (value ? sum + servicePrices[key] : sum),
            0
        );
        return base + serviceTotal;
    };

    return (
        <div style={{
            padding: "5rem",
            marginTop: isServicesRoot ? "10rem" : "0",
        }}>
            <div className="container mil-p-0-f">
                <div className="mil-section-title mil-mb-f mil-up">
                    <h2 className="mil-fs-36">Price Calculator</h2>
                    <div className="mil-dots"></div>
                    <b className="mil-fs-24">04</b>
                </div>

                <div className="mil-calculator">
                    <form>
                        {/* Cleaning Type and Property Type */}
                        <div className="row mil-aic mil-jcb mil-mb-15">
                            <div className="col-12 col-md-3 mil-sm-mb-15">
                                <div className="mil-input-frame mil-custom-select mil-up">
                                    <div className="mil-select-button mil-br-md mil-bg-m-4">
                                        <span className="mil-selected-value mil-fs-18 mil-fw-600 mil-m-1">Basic cleaning</span>
                                    </div>
                                    <ul className="mil-select-dropdown mil-cleaning-type mil-br-md">
                                        <li>
                                            <input type="radio" id="basic-cleaning" name="cleaning" value="90" defaultChecked />
                                            <label htmlFor="basic-cleaning">Basic cleaning</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="general-cleaning" name="cleaning" value="120" />
                                            <label htmlFor="general-cleaning">General cleaning</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="post-construction" name="cleaning" value="150" />
                                            <label htmlFor="post-construction">Post-construction</label>
                                        </li>
                                    </ul>
                                    <i className="far fa-chevron-down mil-a-2"></i>
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="mil-calc-panel mil-br-md mil-jce mil-md-jcs mil-up">
                                    <div className="mil-br-md">
                                        <div className="mil-aic" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                                            {[
                                                ["Apartment", "apartment"],
                                                ["House", "house"],
                                                ["Office", "office"],
                                                ["Industrial", "industrial"],
                                            ].map(([label, value], idx) => (
                                                <label
                                                    key={value}
                                                    className="mil-custom-radio mil-fs-18"
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="property"
                                                        value={value}
                                                        defaultChecked={idx === 0}
                                                    />
                                                    <span className="mil-radio-checkmark"></span>
                                                    {label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Area slider and Room count */}
                        <div className="row mil-aic mil-h-100">
                            <div className="col-12 col-md-6">
                                <div className="mil-calc-panel mil-br-md mil-mb-15 mil-up">
                                    <div className="mil-area-slider mil-aic mil-mb-30">
                                        <label htmlFor="area" className="mil-m-1 mil-fw-600 mil-mr-30 mil-fs-18">Area (m²):</label>
                                        <div className="mil-custom-range-slider">
                                            <input
                                                type="range"
                                                id="area"
                                                name="area"
                                                min="30"
                                                max="300"
                                                value={area}
                                                onChange={(e) => setArea(Number(e.target.value))}
                                            />
                                            <div className="range-track">
                                                <div className="range-fill"></div>
                                            </div>
                                            <div className="range-thumb"></div>
                                        </div>
                                        <span id="area-value" className="mil-value mil-m-1 mil-fw-600 mil-fs-18">{area}m²</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mil-calc-panel-2 mil-br-md mil-mb-15 mil-up">
                                    <div className="mil-rooms mil-w-100">
                                        <div className="row">
                                            {[
                                                ["Bedrooms", "bedrooms"],
                                                ["Bathrooms", "bathrooms"],
                                            ].map(([label, id]) => (
                                                <div className="col-12 col-md-6 mil-mb-15" key={id}>
                                                    <div className="mil-aic mil-jcc mil-sm-jcb">
                                                        <span className="mil-m-1 mil-fw-600 mil-fs-18 mil-mr-15">{label}:</span>
                                                        <div className={`mil-${id} mil-aic`}>
                                                            <button type="button" className="mil-room-btn" onClick={() => updateRoomCount(id, -1)}>−</button>
                                                            <span className="mil-room-count">{id === "bedrooms" ? bedrooms : bathrooms}</span>
                                                            <button type="button" className="mil-room-btn" onClick={() => updateRoomCount(id, 1)}>+</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mil-up">
                            {Object.keys(servicePrices).map((key, index) => {
                                const labelMap = {
                                    cb1: "Floor washing",
                                    cb2: "Vacuuming the floor",
                                    cb3: "Dusting Surfaces",
                                    cb4: "Limescale removal from plumbing",
                                    cb5: "Cleaning the refrigerator",
                                    cb6: "Window cleaning",
                                    cb7: "Dishwashing",
                                    cb8: "Cleaning the hood",
                                    cb9: "Oven cleaning",
                                    cb10: "Cleaning kitchen cabinets",
                                    cb11: "Microwave oven",
                                    cb12: "Wall tiles",
                                    cb13: "Cleaning light fixtures",
                                    cb14: "Folding clothes",
                                    cb15: "Limescale removal from shower",
                                    cb16: "Polishing wooden surfaces",
                                };
                                return (
                                    <div key={key} className="col-12 col-sm-6 col-md-4 col-lg-3 mil-mb-15 mil-up">
                                        <label htmlFor={key} className={`mil-service mil-custom-checkbox mil-m-1 mil-fw-600 ${additionalServices[key] ? "mil-already-included" : ""}`}>
                                            <input
                                                type="checkbox"
                                                id={key}
                                                name="additional-service"
                                                value={servicePrices[key]}
                                                checked={additionalServices[key]}
                                                onChange={() => toggleService(key)}
                                            />
                                            <span className="mil-service-name mil-fs-18">{labelMap[key]}</span>
                                            <span className="mil-checkbox-checkmark"></span>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Total Price Section */}
                        <div className="mil-total-price mil-bg-m-4 mil-br-md mil-up">
                            <div className="row mil-jcb mil-aic">
                                <div className="col-12 col-md-5 mil-mb-30">
                                    <div className="mil-jcs mil-ais">
                                        <i className="fal fa-info-circle mil-bg-a-1 mil-br-f mil-m-1 mil-mr-15" style={{ padding: ".5rem" }}></i>
                                        <p>
                                            The price is indicative only. For more details use the
                                            <a href="contact.html" className="mil-text-link mil-a-2"> contact form</a> or
                                            request a <a href="contact.html" className="mil-text-link mil-a-2"> call back</a>.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mil-jce mil-sm-jcs mil-mb-30">
                                    <div className="mil-tp-frame">
                                        <span className="mil-price-number mil-m-1 mil-fs-18 mil-fw-600">
                                            Total price: &nbsp;&nbsp;₹ <span id="total-price" className="mil-fs-36">{calculateTotal()}</span>
                                        </span>
                                        <button
                                            type="submit"
                                            className="mil-btn mil-br-xl mil-bg-a-2 mil-m-4 mil-hover-bri-110 mil-icon-btn"
                                        >
                                            Order Services <i className="far fa-broom mil-bg-m-4 mil-a-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;