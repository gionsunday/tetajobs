import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { getImagePath } from '../../utils/getImagePath';
import employerData from '../../data/employerData';

const teamData = [
  { imgSrc: getImagePath('e1.jpg'), id:1, name: 'Constanza Mariano', role: 'Founder of CIO' },
  { imgSrc: getImagePath('e2.jpg'), id:2, name: 'Leo Knight', role: 'Co-founder of CIO' },
  { imgSrc: getImagePath('e3.jpg'), id:3, name: 'Gauthier Drewitt', role: 'CTO of Source' },
  { imgSrc: getImagePath('e4.jpg'),id:4, name: 'Sergio Pliego', role: 'CTO of Universal' },
  { imgSrc: getImagePath('e5.jpg'), id:5, name: 'Tamas Bunce', role: 'Head of development' },
  { imgSrc: getImagePath('e6.jpg'), id:6, name: 'Gabriel Soares', role: 'Head of design' },
  { imgSrc: getImagePath('c1.jpg'), id:7, name: 'Salma Fonseca', role: 'CEO of Source' },
  { imgSrc: getImagePath('c2.jpg'), id:8, name: 'Jaclynn Bradley', role: 'Chief of designers' },
  { imgSrc: getImagePath('c3.jpg'), id:9, name: 'Kenjo Assou', role: 'Product manager' }
];

const TeamsSection = () => {
  return (
    <section className="w3l-teams-29-main">
      <div className="teams-29">
        <h3 className="heading">Our Employers</h3>
        <div className="wrapper">
          <div className="d-grid align-center main-contteam-29">
            {employerData.map((member, index) => (
              <TeamMemberCard
                key={index}
                imgSrc={member.img}
                name={member.name}
                role={member.position}
                id={member.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
