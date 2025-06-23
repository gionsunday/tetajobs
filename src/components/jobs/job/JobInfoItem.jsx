import React from 'react';

const JobInfoItem = ({ title, value }) => (
  <div className="job-info1">
    <span className="fa fa-check-square-o"></span>
    <div className="job-info-grid">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  </div>
);

export default JobInfoItem;
