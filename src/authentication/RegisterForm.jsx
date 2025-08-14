import React, { useState } from "react";

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="mil-mb-15 mil-mt-ff mil-up mil-hero-form-frame mil-bg-m-4 mil-br-md">
        <div className="mil-aic mil-column">
          <h3 className="mil-fs-32 mil-tac mil-lh-140 mil-mb-60">
            Create Your Account <br /> and get started today
          </h3>
        </div>
        <form>
          <div className="row">
            <div className="col-6 mil-mb-15">
              <div className="mil-input-frame">
                <input
                  type="text"
                  placeholder="Full Name"
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
                  placeholder="Email"
                  className="mil-br-md mil-bg-m-3"
                  autoComplete="email"
                />
                <i className="far fa-at mil-a-2"></i>
              </div>
            </div>

            <div className="col-md-6 mil-mb-15">
              <div className="mil-input-frame">
                <input
                  type="tel"
                  placeholder="+91 ____-____"
                  className="mil-phone-input mil-br-md mil-bg-m-3"
                  autoComplete="tel"
                />
                <i className="far fa-mobile mil-a-2"></i>
              </div>
            </div>

            <div className="col-md-6 mil-mb-15">
              <div className="mil-input-frame mil-custom-select">
                <div
                  className="mil-select-button mil-br-md mil-bg-m-3 mil-m-1"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <span className="mil-selected-value">{selectedRole}</span>
                  <i className="far fa-chevron-down mil-a-2"></i>
                </div>

                <ul
                  className={`mil-select-dropdown mil-br-md ${
                    isOpen ? "open" : ""
                  }`}
                >
                  {["User", "Service Person"].map((role, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        id={`role${index + 1}`}
                        name="selectRole"
                        value={role}
                        onChange={() => handleSelect(role)}
                        checked={selectedRole === role}
                      />
                      <label htmlFor={`role${index + 1}`}>{role}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 mil-mb-15">
              <div className="mil-input-frame mil-type-2">
                <textarea
                  placeholder="Full Address"
                  className="mil-br-md mil-bg-m-3"
                  autoComplete="off"
                ></textarea>
                <i className="far fa-map-marker-alt mil-a-2"></i>
              </div>
            </div>

            <div className="col-md-6 mil-mb-15">
              <div className="mil-input-frame">
                <input
                  type="password"
                  placeholder="Password"
                  className="mil-br-md mil-bg-m-3"
                  autoComplete="new-password"
                />
                <i className="far fa-lock mil-a-2"></i>
              </div>
            </div>

            <div className="col-md-6 mil-mb-15">
              <div className="mil-input-frame">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="mil-br-md mil-bg-m-3"
                  autoComplete="new-password"
                />
                <i className="far fa-lock mil-a-2"></i>
              </div>
            </div>

            <div className="col-lg-12 mil-aic">
              <p className="mil-fs-14 mil-m-2">
                By clicking register, you agree to our Terms & Conditions
              </p>
              <button
                className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-hover-scale mil-ml-60 mil-sm-ml-30"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;