import React from "react";

import bg from "../assets/img/ui/bg.png";
import a1 from "../assets/img/ui/a1.jpg";
import a2 from "../assets/img/ui/a2.jpg";
import a3 from "../assets/img/ui/a3.jpg";
import icon1 from "../assets/img/ui/bg-i1.png";
import icon2 from "../assets/img/ui/bg-i2.png";
import s1 from "../assets/img/ui/s1.png";
import user1 from "../assets/img/users/1.jpg";
import user2 from "../assets/img/users/2.jpg";
import user3 from "../assets/img/users/3.jpg";
import user4 from "../assets/img/users/4.jpg";

const About = () => {
  return (
    <div className="mil-p-5 mil-relative">
      <img src={bg} alt="background" className="mil-bg" style={{ top: "-10rem" }} />
      <div className="container">
        <div className="mil-section-title mil-up mil-mb-40">
          <h2 className="mil-fs-36">A little bit about us</h2>
          <div className="mil-dots"></div>
          <b className="mil-fs-24">03</b>
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up">
            <div className="mil-about-box mil-br-md">
              <img src={a1} alt="cover" className="mil-box-cover mil-scale-img" />
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up">
            <div className="mil-about-box mil-br-md mil-bg-m-1">
              <img src={icon1} alt="icons" className="mil-box-icons mil-opacity-05 mil-parallax-img" />
              <div className="mil-box-content mil-column mil-jcb mil-tar">
                <ul className="mil-users-inline mil-dark-border mil-sm mil-jce mil-mb-20">
                  <li><img src={user1} alt="User" /></li>
                  <li><img src={user2} alt="User" /></li>
                  <li><img src={user3} alt="User" /></li>
                  <li><img src={user4} alt="User" /></li>
                </ul>
                <div>
                  <div className="mil-fs-72 mil-fw-600 mil-m-3 mil-mb-20">
                    <span className="mil-counter">2740</span><span className="mil-a-1">+</span>
                  </div>
                  <p className="mil-fs-20 mil-m-3 mil-opacity-4">
                    Satisfied customers a year, <br />and this is just the beginning
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up">
            <div className="mil-about-box mil-br-md">
              <img src={a2} alt="cover" className="mil-box-cover mil-scale-img" />
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up">
            <div className="mil-about-box mil-br-md mil-bg-a-2">
              <div className="mil-box-content mil-column mil-jcb">
                <p className="mil-fs-38 mil-fw-600 mil-m-4">
                  <span className="mil-counter">12</span> years of <br />experience in <br />cleaning.
                </p>
                <div>
                  <p className="mil-fs-20 mil-m-3 mil-opacity-7">
                    As many as 12 years of reliability and professionalism
                  </p>
                </div>
                <div className="mil-bg-number mil-scale-img">12</div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up mil-relative">
            <div className="mil-about-box mil-br-md">
              <img
                src={a3}
                alt="cover"
                className="mil-box-cover mil-scale-img"
                style={{ objectPosition: "bottom" }}
              />
            </div>
            <img src={s1} alt="star" className="mil-deco-star" />
          </div>

          <div className="col-md-6 col-xl-4 mil-mb-15 mil-up">
            <div className="mil-about-box mil-br-md mil-bg-a-1">
              <img
                src={icon2}
                alt="icons"
                className="mil-box-icons mil-scale-img"
                style={{ right: "-2rem", top: "10%" }}
              />
              <div className="mil-box-content mil-column mil-jcb">
                <p className="mil-fs-38 mil-fw-600 mil-m-1">
                  We clean with <br /> the environment <br />in mind.
                </p>
                <div>
                  <p className="mil-fs-20 mil-m-1">
                    We use only professional <br />ecological household chemicals <br />and materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;