import React from 'react';

const counterItems = [
  {
    icon: 'fa-user-plus',
    title: 'Experienced Employers',
    description: 'Connect with top-tier companies and seasoned recruiters actively hiring across various sectors.',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Millions of jobs',
    description: 'Explore a vast database of current job openings tailored to diverse skills and industries.',
  },
  {
    icon: 'fa-user',
    title: 'Secure profiles',
    description: 'Your personal data is protected. Manage your resume, credentials, and visibility with full control.',
    gap: true,
  },
  {
    icon: 'fa-money',
    title: 'No advance payments',
    description: 'Apply and get hired without paying any upfront fees. Our platform is completely free for job seekers.',
    gap: true,
  },
];

const CounterSection = () => {
  return (
    <div className="w3l-counter-top-6">
      <section id="counter-6-inf-block" className="counter-main">
        <div className="wrapper-full-gd">
          <div className="d-grid align-counter-6-inf-cols">
            <div className="counter-6-inf-left second"></div>
            <div className="counter-6-inf-right">
              <div className="d-grid grid-col-2">
                {counterItems.map((item, index) => (
                  <div
                    key={index}
                    className={`specification${item.gap ? ' spec-gap' : ''}`}
                  >
                    <span className={`fa ${item.icon}`}></span>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterSection;
