import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo/logo-green-white.png";

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`mil-preloader-frame ${percentage === 100 ? "mil-complete" : ""}`}>
      <div className="mil-preloader-content">
        <img src={logo} alt="logo" style={{width:"80px", height:"50px"}} />
        <div className="mil-preloader">
          <div
            className="mil-preload-line"
            style={{ width: `${percentage}%` }} 
          />
        </div>
        <div className="mil-fs-18 mil-pre-text mil-m-1 mil-fw-600" style={{marginRight:"10px"}}>
          loading:{" "}
          <span className="mil-percent">
            {percentage < 10 ? `0${percentage}` : percentage}
          </span>{" "}
          %
        </div>
      </div>
    </div>
  );
};

export default Preloader;
