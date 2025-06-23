import React from 'react';

const EmployerDetailItem = ({ icon, title, content, isLink }) => {
  return (
    <div className="d-grid employer-detail">
      <div className="icon-employer">
        <span className={`fa ${icon}`}></span>
      </div>
      <div className="detail-employer">
        <h4>{title}</h4>
        {isLink ? <p><a href="#">{content}</a></p> : <p>{content}</p>}
      </div>
    </div>
  );
};

export default EmployerDetailItem;
