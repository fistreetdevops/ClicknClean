import React from "react";
import "../styles/style.css"; // make sure your styles are imported
import ContactPage from "./ContactUs";

const subscriptionPlans = [
  {
    title: "Basic Care",
    price: 199,
    bgClass: "mil-bg-m-1",
    link: <ContactPage />,
    features: [
      "Dust all surfaces",
      "Mop floors",
      "Clean kitchen surfaces",
      "Disinfect bathroom and toilet",
      "Take out trash",
    ],
  },
  {
    title: "Essential Clean",
    price: 399,
    bgClass: "mil-bg-a-2",
    link: <ContactPage />,
    features: [
      "Dust all surfaces",
      "Mop floors",
      "Clean kitchen surfaces",
      "Disinfect bathroom and toilet",
      "Take out trash",
    ],
  },
  {
    title: "Premium Shine",
    price: 599,
    bgClass: "mil-bg-a-1",
    link: <ContactPage />,
    features: [
      "Dust all surfaces",
      "Mop floors",
      "Clean kitchen surfaces",
      "Disinfect bathroom and toilet",
      "Take out trash",
    ],
  },
];

const SubscriptionSection = () => {
  return (
    <div className="mil-p-0-15">
      <div className="container">
        {/* Section Title */}
        <div className="mil-section-title mil-mb-f mil-up">
          <h2 className="mil-fs-36">Cleaning subscription</h2>
          <div className="mil-dots"></div>
          <b className="mil-fs-24">05</b>
        </div>

        <div className="row">
          {subscriptionPlans.map((plan, index) => (
            <div
              className="col-md-6 col-lg-4 mil-mb-15 mil-up"
              key={index}
            >
              <a
                href={plan.link}
                className="mil-subscription-card mil-bg-m-4 mil-br-md"
              >
                {/* Card Head */}
                <div className={`mil-card-head ${plan.bgClass}`}>
                  <h4 className="mil-fs-24 mil-m-4">{plan.title}</h4>
                </div>

                {/* Card Body */}
                <div className="mil-card-body">
                  <div className="mil-m-1 mil-fs-20 mil-fw-600 mil-mb-15">
                    from ₹ <span className="mil-fs-52">{plan.price}</span>{" "}
                    <span className="mil-fw-400 mil-fs-16">/month</span>
                  </div>
                  <p className="mil-mb-30">
                    4 times a month, 1 time a week
                  </p>

                  <div className="mil-dots mil-mb-30"></div>

                  <div className="col-sm-12">
                    <ul className="mil-check-list mil-mb-40">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="mil-dots mil-mb-30"></div>

                    <div>
                      <div className="mil-btn mil-bg-m-3 mil-br-xl mil-hover-bg-a-1 mil-hover-scale">
                        Choose a plan
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;