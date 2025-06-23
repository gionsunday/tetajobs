// src/components/JobFeatureBox.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const JobFeatureBox = ({id, imgSrc, title, location, role, type, time }) => {
  return (
    <div className="price-box btn-layout bt6">
      <div className="grid grid-column-2">
        <div className="column1">
          <a href="#img5">
            <img src={imgSrc} width="60px" alt="" className="img-responsive" />
          </a>
          <div className="job-info">
            <h6 className="pricehead">
              <a href="#link">{title}</a>
            </h6>
            <ul className="location">
              <li><span className="fa fa-map-marker"></span> {location}</li>
              <li><span className="fa fa-briefcase"></span> {role}</li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <p><strong>Type :</strong>{type}</p>
          <p><strong>Time :</strong>{time}</p>
        </div>
        <div className="column3 text-right">
          <Link to={`/jobs/job/${id}/${title}`} className="actionbg">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JobFeatureBox;
