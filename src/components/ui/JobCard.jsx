import React from 'react';

const JobCard = ({ job }) => {

  const {id, title} = job
  return(
  <div className="price-box btn-layout bt6">
    <div className="grid grid-column-2">
      <div className="column1">
        <a href={`/jobs/job/${id}/${title}` || '#'}>
          <img
            src={job.imgSrc || 'https://via.placeholder.com/60'}
            width="60px"
            alt=""
            className="img-responsive"
          />
        </a>
        <div className="job-info">
          <h6 className="pricehead">
            <a href={`/jobs/job/${id}/${title}` || '#'}>{job.title}</a>
          </h6>
          <ul className="location">
            <li><span className="fa fa-map-marker"></span> {job.location || 'Unknown'}</li>
            <li><span className="fa fa-briefcase"></span> {job.title}</li>
          </ul>
        </div>
      </div>
      <div className="column2">
        <p><strong>Type :</strong> {job.type}</p>
        <p><strong>Level :</strong> {job.experience || 'N/A'}</p>
      </div>
      <div className="column3 text-right">
        <a href={`/jobs/job/${id}/${title}`} className="actionbg" target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
    </div>
  </div>
)
};

export default JobCard;
