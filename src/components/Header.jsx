import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/plugins/bootstrap-grid.css";
import "../styles/plugins/swiper.css";
import "../styles/plugins/fancybox.css";
import "../styles/plugins/fontawesome.css";
import logo from "../assets/img/logo/logo-text-main.png";
import logoIcon from "../assets/img/logo/logo-green-white.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`mil-top-panel ${isScrolled ? "mil-scroll" : ""}`}>

      <div className="mil-tp-content" style={{marginLeft:"3rem", marginRight:"3rem"}}>
        {/* Left: Logo */}
        <div className="mil-left">
          <img src={logoIcon} alt="logo-icon" style={{ width: "80px", height: "80px", objectFit: "contain" }} />

          <p className="gradient-text mil-ff-1 mil-fw-500" style={{ fontSize: "3.5rem" }}>Click N Clean</p>

        </div>

        {/* Center: Menu */}
        <nav className="mil-main-menu">
          <ul id="swupMenu" className="mil-menu-transition mil-aic mil-m-4">
            <li className="mil-has-children">
              <a href="/">Home</a>
            </li>
            <li className="mil-has-children">
              <a href="/services">Services</a>
            </li>
            <li className="mil-has-children">
              <a href="#" onClick={scrollToSection()}>Subscriptions</a>
            </li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </nav>

        {/* Right: Contact + Button */}
        <div className="mil-right mil-jce">
          <div className="mil-tp-phone mil-aic mil-mr-60 mil-sm-mr-15">
            <i
              className="far fa-mobile mil-icon mil-sm mil-bg-a-2 mil-m-4 mil-mr-15 mil-sm-hidden"
              style={{ paddingTop: "1.2rem" }}
            ></i>
            <a href="tel:+380123456789" className="mil-fw-600">
              +91 99999-99999
            </a>
          </div>
          <a
            href="/contactus"
            className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-icon-btn mil-hover-scale mil-md-hidden"
          >
            <span>Clean now</span>
            <i className="far fa-magic mil-bg-m-1 mil-a-1"></i>
          </a>
          <div className="mil-menu-btn">
            <span></span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
