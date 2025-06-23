const CandidateDetails = ({ savePdf, details }) => {


  return (
    <aside className="posts single-left-inner">
      <h5 className="card-title">Candidate details</h5>
      {details.map((detail, index) => (
        <div className="d-grid employer-detail" key={index}>
          <div className="icon-employer">
            <span className={`fa ${detail.icon}`}></span>
          </div>
          <div className="detail-employer">
            <h4>{detail.title}</h4>
            <p>
              {detail.isLink ? <a href="#">{detail.value}</a> : detail.value}
            </p>
          </div>
        </div>
      ))}
     <a href="#follow" className="follow" onClick={savePdf}>Save Resume</a>
    </aside>
  );
};

export default CandidateDetails;
