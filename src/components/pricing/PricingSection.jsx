import React from "react";
import PricingCard from "../ui/PricingCard";

const pricingPlans = [
  {
    title: "Basic",
    price: "$15",
    description:
      "Perfect for startups or small businesses just getting started with hiring. Post up to 20 jobs and get visibility on major job boards.",
    includes: "Flat 15% OFF | Buy 5 Job postings or more",
    features: [
      { label: "20 job postings", available: true },
      { label: "Boost on job search engine", available: true },
      { label: "Resume database", available: false },
      { label: "Access to employers", available: false },
    ],
  },
  {
    title: "Standard",
    price: "$29",
    description:
      "Ideal for growing companies. Enjoy extended reach with search engine boosts and access to a pool of resumes for smarter hiring decisions.",
    includes: "Flat 15% OFF | Buy 5 Job postings or more",
    features: [
      { label: "20 job postings", available: true },
      { label: "Boost on job search engine", available: true },
      { label: "Resume database", available: true },
      { label: "Access to employers", available: false },
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "$35",
    description:
      "Designed for established businesses that want full access. Post unlimited jobs, access resumes, connect directly with top candidates, and enjoy premium visibility.",
    includes: "Flat 15% OFF | Buy 5 Job postings or more",
    features: [
      { label: "20 job postings", available: true },
      { label: "Boost on job search engine", available: true },
      { label: "Resume database", available: true },
      { label: "Access to employers", available: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="w3l-pricing-6">
      <div className="pricing-main">
        <h3 className="heading">Job postings</h3>
        <div className="wrapper">
          <div className="pricing-wrapper">
            <div className="grid grid-column-3">
              {pricingPlans.map((plan, idx) => (
                <PricingCard key={idx} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
