import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [phoneno, setPhoneno] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!phoneno.trim()) return alert("Please enter phone number");
    try {
      setLoading(true);
      const res = await fetch("http://192.168.1.4:8080/app/clicknclean/auth/login/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneno }),
      });

      if (!res.ok) throw new Error("Failed to send OTP");

      const data = await res.json();
      console.log("Send OTP response:", data);
      alert("OTP sent successfully!");
      setShowOtp(true);
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!otp.trim()) return alert("Please enter OTP");
    try {
      setLoading(true);
      const res = await fetch("http://192.168.1.4:8080/app/clicknclean/auth/login/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneno, otp }),
      });

      if (!res.ok) throw new Error("Failed to verify OTP");
      const data = await res.json();
      console.log("Verify OTP response:", data);
      localStorage.setItem(data.token);
      alert("Logged in successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP or login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mil-mb-15" style={{ width: "50%" }}>
      <div className="mil-hero-form-frame mil-bg-m-4 mil-br-md">
        <div className="mil-aic mil-column">
          <h3 className="mil-fs-32 mil-tac mil-lh-140 mil-mb-60">
            Welcome Back! <br /> Please Login
          </h3>
        </div>

        <form onSubmit={showOtp ? handleLogin : handleSendOtp}>

          <div className="col-12 mil-mb-15">
            <div className="mil-input-frame">
              <input
                type="tel"
                placeholder="+91 ____-____"
                className="mil-phone-input mil-br-md mil-bg-m-3"
                autoComplete="tel"
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                disabled={showOtp || loading}
              />
              <i className="far fa-mobile mil-a-2"></i>
            </div>
          </div>

          {showOtp && (
            <div className="col-12 mil-mb-15">
              <div className="mil-input-frame">
                <input
                  type="text"
                  className="mil-br-md mil-bg-m-3"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <i className="far fa-lock mil-a-2"></i>
              </div>
            </div>
          )}

          {showOtp && (
            <div className="col-lg-12 mil-mb-15 mil-aic mil-jcsb">
              <a
                href="/forgot-password"
                className="mil-fs-16 mil-text-link mil-a-1"
              >
                Forgot password?
              </a>
            </div>
          )}
          <div className="mil-jcc">
            <button
              className="mil-btn mil-bg-a-1 mil-br-xl mil-hover-bri-105 mil-hover-scale"
              type="submit"
            >
              {showOtp ? "Login" : "Send OTP"}
            </button>
          </div>

          {!showOtp && (
            <div className="col-lg-12 mil-tac mil-mt-40">
              <p className="mil-fs-16">
                Don’t have an account?{" "}
                <a href="/register" className="mil-text-link mil-a-1">
                  Register here
                </a>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;