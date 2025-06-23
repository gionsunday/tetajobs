import React from "react";

const PricingCard = ({
  title,
  price,
  description,
  features,
  includes,
  highlight = false,
}) => {
  return (
    <div className="column">
      <div className="pricing">
        {highlight && (
          <div className="arrow-right">
            <span className="fa fa-star"></span>
          </div>
        )}
        <div className="pricing-top">
          <h4>{title}</h4>
          <h2>
            {price} <span>/ month</span>
          </h2>
        </div>
        <div className="pricing-bottom">
          <div className="pricing-bottom-top">
            <p>{description}</p>
          </div>
          <div className="pricing-bottom-bottom">
            <ul className="links">
              {features.map(({ label, available }, index) => (
                <li key={index}>
                  <div className="tick-mark">
                    <span
                      className={`fa ${
                        available
                          ? "fa-check-circle-o"
                          : "fa-times"
                      }`}
                    ></span>
                  </div>
                  <h5 className="tick-info">{label}</h5>
                  <div className="clear"></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="buy-button">
            <a className="popup" href="#buy">
              Buy now
            </a>
          </div>
          <p className="includes">{includes}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
