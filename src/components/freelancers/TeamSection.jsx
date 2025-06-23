import React from 'react';
import TeamMember from './TeamMember';
import { getImagePath } from '../../utils/getImagePath';
import teamData from '../../data/teamData';

const TeamSection = () => {
  return (
    <section className="w3l-teams-33-main">
      <div className="teams-33">
        <h3 className="heading">Our Candidates</h3>
        <div className="wrapper">
          <div className="d-grid grid-col-4 align-center main-contteam-33">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
