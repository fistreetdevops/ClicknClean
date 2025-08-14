import React from "react";
import footerVideo from "../assets/img/ui/footer.mp4"; 

const Footer = () => {
  return (
    <footer>
      {/* Background Video */}
      <div className="mil-footer-bg">
        <video
          className="mil-footer-bg mil-scale-img"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="mil-footer-content">
        <div className="container">
          <div className="row mil-p-f-60">
            <div className="col-lg-7 col-md-6 col-sm-12 mil-mb-60">
              <div className="row">
                <div className="col-8 col-md-6">
                  <p className="mil-mb-30 mil-fs-18 mil-up">Subscribe our newsletter</p>
                  <form className="mil-subscribe mil-up">
                    <input
                      type="email"
                      className="mil-bg-m-1 mil-br-xl"
                      placeholder="Your email"
                      id="subscribe"
                      name="subscribe"
                    />
                    <button type="submit" className="mil-bg-a-1">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Menu Links */}
            <div className="col-lg-5 col-md-6 col-sm-12 mil-mb-60">
              <div className="row">
                <div className="col-6">
                  <ul>
                    {["Home", "Services", "Calculate price", "Blog", "Contact"].map((item, i) => (
                      <li
                        key={i}
                        className="mil-fs-24 mil-fw-600 mil-m-3 mil-hover-a-1 mil-mb-20 mil-up"
                      >
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    {["Apartment", "Home", "Office", "Windows", "Pool"].map((service, i) => (
                      <li key={i} className="mil-up-text mil-hover-m-4 mil-mb-20 mil-up">
                        <a href="#">{service}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mil-dots mil-up"></div>

          {/* Social & Policy */}
          <div className="row mil-p-f-60 mil-sm-column-r">
            <div className="col-lg-7 col-md-6 col-sm-12 mil-column mil-jcb mil-mb-60">
              <ul className="mil-aic mil-mb-30 mil-up">
                {["instagram", "facebook-f", "youtube", "pinterest-p"].map((icon, i) => (
                  <li key={i} className={`mil-mr-20 mil-fs-20 mil-m-3`}>
                    <a href="#." target="_blank" rel="noreferrer" className="mil-hover-a-1">
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="mil-aic mil-up">
                {["Privacy Policy", "Terms and conditions", "Cookie Policy"].map((policy, i) => (
                  <li key={i} className="mil-hover-m-4 mil-mr-20">
                    <a href="#">{policy}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 col-sm-12 mil-mb-60">
              <div className="row mil-jcb">
                <div className="col-6 mil-up">
                  <h5 className="mil-fs-22 mil-fw-600 mil-m-3 mil-mb-20">Springfield</h5>
                  <p className="mil-mb-20">
                    71 South Los Carneros Road, <br /> Goleta, California 93117
                  </p>
                  <p className="mil-up-text mil-a-1">+1-877-926-5184</p>
                </div>
                <div className="col-6 mil-up">
                  <h5 className="mil-fs-22 mil-fw-600 mil-m-3 mil-mb-20">Greenville</h5>
                  <p className="mil-mb-20">
                    71 South Los Carneros Road, <br /> Goleta, California 93117
                  </p>
                  <p className="mil-up-text mil-a-1">+31 174 705 811</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mil-dots mil-up"></div>
          <div className="mil-footer-bottom mil-aic mil-jcb mil-up">
            <p>© Copyright 2025 - Click N Clean. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;