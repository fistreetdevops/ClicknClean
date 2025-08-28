import { BrowserRouter as Router, Routes, Route, useNavigate, useSearchParams } from "react-router-dom";

import About from "./components/About";
import CallOrderPanel from "./components/CallOrderPanel";
import DiscountPopup from "./components/DiscountPopup";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import PriceCalculator from "./components/PriceCalculator";
import Services from "./components/Services";
import SubscriptionSection from "./components/Subscriptions";
import ContactUs from "./components/ContactUs";
import RegisterForm from "./authentication/RegisterForm";
import LoginForm from "./authentication/LoginForm";

function HomePage() {

  return (
    <>
      <Services />
      <DiscountPopup />
      <Hero />
      <About />
      <PriceCalculator />
      <SubscriptionSection id="subscriptions-section" />
      <FaqSection />
      <CallOrderPanel />
    </>
  );
}
function App() {

  return (
    <Router>
      <div className="mil-page-wrapper">
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calculator" element={<PriceCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
