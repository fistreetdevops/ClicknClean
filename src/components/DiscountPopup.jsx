import React, { useEffect, useState } from "react";
import star from "../assets/img/ui/star.svg";
import discount from "../assets/img/ui/discount.svg";
import logoLight from "../assets/img/logo/logo-green-white.png";
import { useLocation } from "react-router-dom";

const DiscountPopup = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && !localStorage.getItem("discountPopupShown")) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 5000);
      return () => clearTimeout(timer);
    }


  }, [location]);

  const closePopup = () => {
    setIsActive(false);
    localStorage.setItem("discountPopupShown", "true");
  };

  if (!isActive) return null;

  return (
    <div className={`mil-discount-popup ${isActive ? "mil-active" : ""}`}>
      <div className="mil-popup-window">
        <div className="mil-envelope-top">
          <i className="fal fa-times mil-close-popup" onClick={closePopup}></i>
          {/* Top SVG Envelope */}
          <svg viewBox="0 0 555 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_658_621)">
              <path
                d="M15 180.242C15 169.665 20.5702 159.869 29.6603 154.461L262.16 16.1269C271.613 10.5024 283.387 10.5024 292.84 16.1269L525.34 154.461C534.43 159.869 540 169.665 540 180.242V205H15V180.242Z"
                fill="white"
              />
            </g>
            <path
              d="M90 153L277.931 43L465 153"
              stroke="#CC4E4E"
              strokeOpacity="0.04"
              strokeWidth="34"
              strokeLinecap="round"
            />
            <defs>
              <filter
                id="filter0_d_658_621"
                x="0"
                y="0.908447"
                width="555"
                height="223.092"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_658_621" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_658_621" result="shape" />
              </filter>
            </defs>
          </svg>

          {/* Discount Content */}
          <div className="mil-discount-card">
            <div className="mil-text-part mil-aic mil-bg-a-1">
              <div className="mil-aic">
                <div className="mil-dscnt-star mil-invert">
                  <img src={star} alt="star" />
                  <div className="mil-fs-40 mil-lh-100 mil-m-3 mil-fw-700">
                    <span>50</span>%
                  </div>
                </div>
                <div>
                  <p className="mil-m-1 mil-mb-15 mil-opacity-7">Hurry up!</p>
                  <h3 className="mil-fs-32 mil-mb-20">
                    Discount for the first cleaning <span className="mil-m-4">*</span>
                  </h3>
                  <p className="mil-m-1 mil-opacity-7">Limited time offer!</p>
                </div>
              </div>
            </div>
            <div className="mil-dscnt-part">
              <img src={discount} alt="discount" />
              <div className="mil-up-text mil-m-4">
                {/* <img
                  src={logoLight}
                  alt="logo"
                  style={{ width: "11rem", height: "auto", marginLeft: "-.5rem" }}
                /> */}
                <p className="gradient-text mil-ff-1 mil-fw-500" style={{ fontSize: "2rem" }}>Click N Clean</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="mil-envelope-body mil-tac mil-br-lg">
          <h4 className="mil-fs-36 mil-mb-60">🔥 Wow! That's so lucky! 🥳</h4>
          <form>
            <div className="row">
              <div className="col-6 mil-mb-15">
                <div className="mil-input-frame">
                  <input
                    type="text"
                    name="user-name"
                    placeholder="Name"
                    className="mil-br-md mil-bg-m-3"
                    autoComplete="name"
                  />
                  <i className="far fa-user mil-a-2"></i>
                </div>
              </div>
              <div className="col-6 mil-mb-15">
                <div className="mil-input-frame">
                  <input
                    type="email"
                    name="user-email"
                    placeholder="Email"
                    className="mil-br-md mil-bg-m-3"
                    autoComplete="email"
                  />
                  <i className="far fa-at mil-a-2"></i>
                </div>
              </div>
              <div className="col-md-12 mil-mb-15">
                <div className="mil-input-frame">
                  <input
                    type="tel"
                    name="user-tel"
                    className="mil-phone-input mil-br-md mil-bg-m-3"
                    placeholder="+91 _____ - _____"
                    autoComplete="tel"
                  />
                  <i className="far fa-mobile mil-a-2"></i>
                </div>
              </div>
              <div className="col-lg-12 mil-aic mil-mt-15">
                <p className="mil-fs-14 mil-m-2 mil-tal">
                  By clicking the send button, you agree to the rules for processing personal data
                </p>
                <button
                  type="submit"
                  className="mil-btn mil-bg-a-1 mil-icon-btn mil-br-xl mil-hover-bri-105 mil-hover-scale mil-ml-60 mil-sm-ml-30"
                >
                  Get it now
                  <i className="far fa-arrow-right mil-bg-m-1 mil-a-1"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;