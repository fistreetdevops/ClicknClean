import React, { useState } from "react";

const faqs = [
  { question: "What cleaning services do you offer?", answer: "We offer a wide range of services, including residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and specialized cleaning such as carpet and upholstery cleaning." },
  { question: "Do you use eco-friendly cleaning products?", answer: "Yes, we prioritize the health and safety of our clients and the environment. We offer eco-friendly cleaning solutions that are safe for children, pets, and people with allergies." },
  { question: "How do I schedule a cleaning service?", answer: "You can easily schedule a cleaning service through our website or by giving us a call. Just choose your preferred date and time, and we'll handle the rest!" },
  { question: "Do I need to be home during the cleaning?", answer: "It’s entirely up to you! Some of our clients prefer to be home, while others provide us with access instructions. Rest assured, our cleaners are trustworthy and professional." },
  { question: "What should I do before the cleaners arrive?", answer: "We recommend tidying up personal items and valuables before the cleaners arrive. This helps us focus on the cleaning tasks more efficiently." },
  { question: "Are your cleaners insured and background-checked?", answer: "Yes, all of our cleaners are fully insured and undergo thorough background checks to ensure your peace of mind." },
  { question: "What happens if I’m not satisfied with the cleaning?", answer: "Customer satisfaction is our top priority. If you're not completely happy with the service, please contact us within 24 hours, and we'll arrange a re-cleaning free of charge." },
  { question: "Can I customize the cleaning service to fit my needs?", answer: "Absolutely! We offer flexible cleaning plans that can be tailored to meet your specific needs. Whether it’s a particular area that needs extra attention or special instructions, we’ve got you covered." },
  { question: "Do you offer discounts for regular cleaning services?", answer: 'Yes, we offer special pricing for recurring cleaning services. Whether you need weekly, bi-weekly, or monthly cleaning, we have <a href="/" className="mil-text-link mil-a-1">Packages</a> that provide great value.' },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mil-p-0-30" id="faq">
      <div className="container">
        <div className="mil-section-title mil-mb-40 mil-up">
          <h2 className="mil-fs-36">FAQ</h2>
          <div className="mil-dots"></div>
          <b className="mil-fs-24">06</b>
        </div>

        <div className="row mil-mb-60">
          {[0, 1].map((col) => (
            <div key={col} className="col-lg-6">
              {faqs
                .filter((_, i) => i % 2 === col)
                .map((faq, index) => {
                  const actualIndex = index * 2 + col;
                  const isOpen = openIndex === actualIndex;
                  return (
                    <div className="mil-mb-15 mil-up" key={actualIndex}>
                      <button
                        className={`mil-accordion mil-fw-600 mil-fs-20 ${isOpen ? "mil-active" : ""}`}
                        onClick={() => toggleFaq(actualIndex)}
                      >
                        {faq.question}
                        <span className="mil-icon mil-sm mil-bg-m-3">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className="mil-panel"
                        style={{
                          maxHeight: isOpen ? "500px" : "0",
                          overflow: "hidden",
                          transition: "max-height 0.4s ease",
                        }}
                      >
                        <p
                          className="mil-lh-160 mil-fs-18"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-6 mil-mb-30 mil-up">
            <p className="mil-lh-160 mil-fs-18">
              Didn't find the answer to your question? Visit our Contact page
              and let us help! We're here to provide the information you need.
              Reach out to us anytime – we'd love to assist you!
            </p>
          </div>
          <div className="col-lg-6 mil-jce mil-sm-jcs mil-mb-30 mil-up">
            <a
              href="/contactus"
              className="mil-btn mil-bg-m-2-light mil-br-xl mil-hover-bg-a-1 mil-hover-scale mil-icon-btn"
            >
              Contact us
              <i className="far fa-envelope mil-bg-m-4 mil-m-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;