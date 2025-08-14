import React from "react";
import bg from "../assets/img/ui/bg.png";
import t1 from "../assets/img/ui/t1.jpg";
import t2 from "../assets/img/ui/t2.jpg";
import star from "../assets/img/ui/star.svg";
import discount from "../assets/img/ui/discount.svg";
import hero1 from "../assets/img/hero/1.jpg";
import user1 from "../assets/img/users/1.jpg";
import user2 from "../assets/img/users/2.jpg";
import user3 from "../assets/img/users/3.jpg";
import user4 from "../assets/img/users/4.jpg";

const Hero = () => {
  return (
    <div className="mil-hero-3 mil-relative" id="top">
      <img src={bg} alt="background" className="mil-bg" style={{ top: 0 }} />
      <div className="container mil-column mil-jcb mil-h-100">
        <div className="row mil-jcb mil-h-100">
          <div className="col-lg-7">
            <div className="mil-main-title mil-jcc mil-ais mil-column">
              <div className="mil-column mil-sm-aic mil-mb-60 mil-md-mb-0 mil-w-100">
                <div className="mil-aic">
                  <div className="mil-word-frame">
                    <svg
                      width="89"
                      height="89"
                      viewBox="0 0 89 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mil-text-star"
                      style={{ top: "-15%", right: "-15%" }}
                    >
                      <rect x="42.14" y="13" width="3.47" height="62.78" fill="#F6D62D" />
                      <rect x="13" y="45.26" width="3.47" height="62.78" transform="rotate(-90 13 45.26)" fill="#F6D62D" />
                      <rect x="21.59" y="22.81" width="3.47" height="62.78" transform="rotate(-45 21.59 22.81)" fill="#F6D62D" />
                      <rect x="22.81" y="67.2" width="3.47" height="62.78" transform="rotate(-135 22.81 67.2)" fill="#F6D62D" />
                    </svg>
                    <h1 className="mil-fs-100 mil-sm-fs-72 mil-lh-110">Modern</h1>
                  </div>
                  <div className="mil-fs-16 mil-m-2 mil-lh-160 mil-ml-60 mil-mt-20 mil-sm-hidden">
                    We clean objects of any <br /> complexity and size in 6-9 hours
                  </div>
                </div>

                <div className="mil-word-frame">
                  <h1 className="mil-fs-100 mil-sm-fs-72 mil-lh-110">
                    <img src={t2} alt="text-img" className="mil-text-image mil-long" /> Cleaning
                  </h1>
                </div>

                <div className="mil-word-frame mil-mb-40">
                  <h1 className="mil-fs-100 mil-sm-fs-72 mil-lh-110">
                    Service <img src={t1} alt="text-img" className="mil-text-image" />
                  </h1>
                  <svg
                    width="89"
                    height="89"
                    viewBox="0 0 89 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mil-text-star mil-sm-hidden"
                    style={{ width: "2vw", bottom: "-40%", left: "5%" }}
                  >
                    <rect x="42.14" y="13" width="3.47" height="62.78" fill="#F6D62D" />
                    <rect x="13" y="45.26" width="3.47" height="62.78" transform="rotate(-90 13 45.26)" fill="#F6D62D" />
                    <rect x="21.59" y="22.81" width="3.47" height="62.78" transform="rotate(-45 21.59 22.81)" fill="#F6D62D" />
                    <rect x="22.81" y="67.2" width="3.47" height="62.78" transform="rotate(-135 22.81 67.2)" fill="#F6D62D" />
                  </svg>
                </div>

                <div className="mil-buttons-frame">
                  <a href="/services" className="mil-btn mil-icon-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-hover-scale">
                    Learn more<i className="far fa-plus mil-bg-m-4 mil-m-1"></i>
                  </a>
                  <a href="/calculator" className="mil-link mil-m-1 mil-reverse">
                    Price Calculator<i className="far fa-calculator mil-bg-a-2 mil-m-4" style={{ padding: ".2rem 0 0 .2rem" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="mil-hero-right-image">
              <img src={hero1} alt="hero" className="mil-scale-img-top" />
            </div>
          </div>
        </div>

        <div className="mil-hero-cards-frame">
          <div className="row">
            <div className="col-lg-7 col-xxl-4 mil-mb-15">
              <div className="mil-hero-users-card mil-bg-a-2 mil-br-md">
                <div className="mil-aic mil-mb-30">
                  <ul className="mil-users-inline">
                    <li><img src={user1} alt="User" /></li>
                    <li><img src={user2} alt="User" /></li>
                    <li><img src={user3} alt="User" /></li>
                    <li><img src={user4} alt="User" /></li>
                  </ul>
                  <span className="mil-fs-32 mil-fw-700 mil-m-4 mil-ml-30">117+</span>
                </div>
                <p className="mil-fs-18 mil-m-4 mil-mr-15 mil-sm-mr-0" style={{ opacity: ".7" }}>
                  More than 117+ customers have already appreciated all our advantages. Try it for yourself!
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-xxl-3 mil-mb-15">
              <div className="mil-hero-reviews-card mil-bg-m-4 mil-br-md">
                <h3 className="mil-fs-32 mil-mb-30">Clean spaces, <br /> happy faces</h3>
                <a href="#reviews" className="mil-link mil-m-1">
                  read reviews<i className="far fa-arrow-right mil-bg-a-1 mil-m-1" style={{ padding: ".2rem 0 0 .2rem" }}></i>
                </a>
              </div>
            </div>

            <div className="col-lg-12 col-xxl-5 mil-mb-15">
              <div className="mil-discount-card mil-hover-move mil-call-popup">
                <div className="mil-text-part mil-aic mil-bg-a-1">
                  <div className="mil-aic">
                    <div className="mil-dscnt-star mil-invert">
                      <img src={star} alt="star" />
                      <div className="mil-fs-40 mil-lh-100 mil-m-3 mil-fw-700">
                        <span className="mil-counter">50</span>%
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
                  <div className="mil-up-text mil-m-4">Get it now</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;