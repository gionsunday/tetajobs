import React from 'react';
import { Link } from 'react-router-dom';
const TeamMemberCard = ({ imgSrc, name, role, id }) => {
  return (
    <div className="team-main-29">
      <div className="column-29">
        <Link to={`/top-employers/${id}/${name}`} >
          <img className="img-responsive" src={imgSrc} alt=" " />
        </Link>
        <div className="right-team-9">
          <h6>
            <Link to={`/top-employers/${id}/${name}`}  className="title-team-29">{name}</Link>
          </h6>
          <p className="sm-text-29">{role}</p>
        </div>
        <Link to={`/top-employers/${id}/${name}`} className="follow">View</Link>
      </div>
      <ul className="social">
        <li><Link to="#"><span className="fa fa-facebook-square"></span></Link></li>
        <li><Link to="#"><span className="fa fa-twitter-square"></span></Link></li>
        <li><Link to="#"><span className="fa fa-linkedin-square"></span></Link></li>
      </ul>
    </div>
  );
};

export default TeamMemberCard;
