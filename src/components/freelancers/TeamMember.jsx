import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({id, image, name, role, location, profileLink }) => {
  return (
    <div className="team-main-19">
      <div className="column-19">
        <Link to={`${profileLink}/${id}/${name}`}><img className="image" src={image} alt=" " /></Link>
      </div>
      <div className="right-team-9">
        <div className="sub-grid-33">
          <h5><Link to={`${profileLink}/${id}/${name}`} className="title-team-33">{name}</Link></h5>
          <p className="sm-text-33">{role}</p>
          <p className="sub-paragraph midd-para-team"><span className="fa fa-map-marker"></span> {location}</p>
          <Link to={`${profileLink}/${id}/${name}`} className="profile">View profile </Link>
        </div>
        <div className="buttons-teams">
          <Link to="#team"><span className="fa fa-facebook-square"></span></Link>
          <Link to="#team"><span className="fa fa-twitter-square"></span></Link>
          <Link to="#team"><span className="fa fa-linkedin-square"></span></Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
