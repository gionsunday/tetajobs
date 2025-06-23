import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getImagePath';


const AboutFeatureSection = () => {
  return (
    <section className="w3l-features-photo-7">
      <div className="w3l-features-photo-7_sur">
        <h3 className="heading"> About HR Resources</h3>
        <div className="wrapper">
          <div className="w3l-features-photo-7_top">
            <div className="w3l-features-photo-7_top-left">
              <h4>First Job portal theme having mobile app application</h4>
              <p>
                A Complete Job Portal Experience – Now with Mobile Access
                Stay connected to your career goals wherever you are. Our platform combines powerful job search tools with the convenience of a mobile app, allowing you to browse listings, apply instantly, and stay updated on the go.
              </p>
              <div className="feat_top">
                <div className="w3l-features-photo-7-box">
                  <img src={getImagePath("job1.png")} className="img-responsive" width="50px" alt="" />
                  <h5 className="w3l-features-photo-7-box-txt">
                    <Link to="#">Login to portal</Link>
                  </h5>
                  <p>
                    Log in to manage your profile, track job applications, and receive personalized recommendations tailored to your skills and interests. 
                  </p>
                </div>
                <div className="w3l-features-photo-7-box">
                  <img src={getImagePath("job2.png")} className="img-responsive" width="50px" alt="" />
                  <h5 className="w3l-features-photo-7-box-txt">
                    <Link to="#">Apply for a job</Link>
                  </h5>
                  <p>Take the First Step Toward Your Career Goals.
                    Browse thousands of verified job listings and apply with ease.</p>
                </div>
              </div>
            </div>
            <div className="w3l-features-photo-7_top-right">
              <img src={getImagePath("blog1.jpg")} className="img-responsive" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatureSection;
