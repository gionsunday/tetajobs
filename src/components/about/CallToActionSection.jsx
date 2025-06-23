import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="w3l-call-to-action-6">
      {/* /call-vv-action */}
      <div className="call-vv-action">
        <div className="wrapper">
          <div className="grid">
            <div className="float-lt">
              <h3 className="hny-title">Want to become a member? Join us.</h3>
              <p>For Online queries, please call us today</p>
            </div>
            <div className="float-rt text-right">
              <ul className="buttons">
                <li className="phone">
                  <span className="fa fa-volume-control-phone" aria-hidden="true"></span>{' '}
                  +1(23) 456 789 0000
                </li>
                <li className="green">Or</li>
                <li>
                  <Link to="/contact" className="btn read active">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* //call-vv-action */}
    </section>
  );
};

export default CallToActionSection;
