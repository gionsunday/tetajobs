

const Skills = ({skills}) => (
  <div className="single-left-inner">
    <h5 className="card-title">Skills</h5>
    <div className="specifications-7-top-right_sur">
      {skills.map((skill, index) => (
        <div className="specifications-7-light-grey" key={index}>
          <span>{skill.name} <strong>({skill.percent}%)</strong></span>
          <div className={skill.class} style={{ height: '5px', width: `${skill.percent}%` }}></div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
