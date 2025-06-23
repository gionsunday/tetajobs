

const EducationExperience = ({educationData}) => (
  <div className="single-left-inner">
    <h5 className="card-title">Education and experience</h5>
    {educationData.map((edu, index) => (
      <div className="edu-grid" key={index}>
        <label>{edu.period}</label>
        <h4 className="edu-title">{edu.title}</h4>
        <span>{edu.institution}</span>
        <p>{edu.desc}</p>
      </div>
    ))}
  </div>
);

export default EducationExperience;
