import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import AdminLayout from "./AdminLayout";

// ---------------- Public Website ----------------
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

// ---------------- App ----------------
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Website */}
        <Route
          path="/*"
          element={
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
          }
        />

        {/* Admin ERP (completely separate layout) */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;