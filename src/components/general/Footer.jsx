import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getImagePath';
import { useNavigation } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="w3l-footer-17">
      <div className="footer17_sur">
        <div className="wrapper">
          <div className="footer17-top">

            <div className="footer17-top-left1_sur">
              <h6>Get In touch</h6>
              <p>Are you interested in jobs, need to get latest updates and information?</p>
              <form action="#" className="subscribe" method="post">
                <input type="email" name="email" placeholder="Enter email" required />
                <button><span className="fa fa-paper-plane"></span></button>
              </form>
            </div>

            <div className="footer17-top-left2_sur">
              <h6>Categories list</h6>
              <ul>
                <li><Link to={`/jobs?category=Web designer`}>Web designer</Link></li>
                <li><Link to={`/jobs?category=Software developer`}>Software developer</Link></li>
                <li><Link to={`/jobs?category=Designing`}>Designing</Link></li>
                <li><Link to={`/jobs?category=Customer Service`}>Customer Service</Link></li>
              </ul>
            </div>

            <div className="footer17-top-left3_sur">
              <h6>Job Locations</h6>
              <ul>
                <li><Link to={`/jobs?location=United states`}>United states</Link></li>
                <li><Link  to={`/jobs?location=Australia`}>Australia</Link></li>
                <li><Link  to={`/jobs?location=Srilanka`}>Srilanka</Link></li>
                <li><Link  to={`/jobs?location=Saudia arabia`}>Saudia arabia</Link></li>
              </ul>
            </div>

            <div className="footer17-top-left4_sur">
              <h6>Hot Links</h6>
              <ul>
                <li><Link to="/top-freelancers">Candidates list</Link></li>
                <li><Link to="/top-employers">Companies list</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/jobs">Job posts</Link></li>
              </ul>
            </div>

            <div className="footer17-top-left5_sur">
              <h6>Mobile app</h6>
              <Link to="#playstore">
                <img src={getImagePath("googleplay.png")} className="img-responsive" alt="" />
              </Link>
              <Link to="#appstore">
                <img src={getImagePath("appstore.png")} className="img-responsive" alt="" />
              </Link>
            </div>

          </div>

          <div className="footer-left">
            <p>
              © 2019 HR Crew. All rights reserved | Designed by{' '}
              <a href="/">TetaJobs</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
