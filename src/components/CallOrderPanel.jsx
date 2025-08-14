import React, { useState, useEffect } from "react";
import callCenterImage from "../assets/img/ui/cc.jpg";

const CallOrderPanel = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsBottom(scrollY + windowHeight >= docHeight - 100);
      setShowTopBtn(scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mil-right-buttons-frame ${isBottom ? "mil-on-bottom" : ""}`}>
      <div className={`mil-order-call-window ${showCallPopup ? "mil-active" : ""}`}>
        <div className="mil-ocw-content">
          <div className="row mil-aic">
            <div className="col-lg-7">
              <form>
                <h4 className="mil-fs-28 mil-mb-30">
                  Leave your number, <br />
                  and we'll call you back
                </h4>

                <div className="mil-input-frame mil-mb-15">
                  <input
                    type="text"
                    id="user-name-2"
                    name="user-name"
                    placeholder="Name"
                    className="mil-br-md mil-bg-m-3"
                    autoComplete="name"
                  />
                  <i className="far fa-user mil-a-2"></i>
                </div>

                <div className="mil-input-frame mil-mb-30">
                  <input
                    type="tel"
                    id="user-phone-2"
                    name="user-tel"
                    className="mil-phone-input mil-br-md mil-bg-m-3"
                    placeholder="+91 "
                    autoComplete="tel"
                  />
                  <i className="far fa-mobile mil-a-2"></i>
                </div>

                <button
                  className="mil-btn mil-bg-a-1 mil-icon-btn mil-br-xl mil-hover-bri-105 mil-hover-scale"
                  type="submit"
                >
                  Order a call
                  <i className="far fa-arrow-right mil-bg-m-1 mil-a-1"></i>
                </button>
              </form>
            </div>

            <div className="col-lg-5">
              <img
                src={callCenterImage}
                alt="callcenter"
                className="mil-ocw-img mil-br-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mil-right-buttons">
        <button
          className={`mil-side-btn mil-back-to-top ${showTopBtn ? "mil-active" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="far fa-arrow-up mil-a-1"></i>
        </button>

        <button
          className={`mil-side-btn mil-open-window ${showCallPopup ? "mil-active" : ""}`}
          onClick={() => setShowCallPopup(!showCallPopup)}
        />
      </div>
    </div>
  );
};

export default CallOrderPanel;