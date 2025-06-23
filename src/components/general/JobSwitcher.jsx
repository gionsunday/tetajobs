import React, { useState } from 'react';
// import './YourCSSFile.css'; // where .hide and other styles exist

const JobSwitcher = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pricing-style-w3ls">
      <div className="full text-center">
        <label
          className={`toggler ${activeTab === 'monthly' ? 'toggler--is-active' : ''}`}
          onClick={() => handleClick('monthly')}
        >
          Recent Jobs
        </label>
        <div className="toggle" onClick={() => handleClick(activeTab === 'monthly' ? 'hourly' : 'monthly')}></div>
        <label
          className={`toggler ${activeTab === 'hourly' ? 'toggler--is-active' : ''}`}
          onClick={() => handleClick('hourly')}
        >
          Updated Jobs
        </label>
      </div>

      <div id="monthly" className={activeTab === 'monthly' ? '' : 'hide'}>
        {/* Monthly jobs content here */}
        <p>Showing Recent Jobs</p>
      </div>
      <div id="hourly" className={activeTab === 'hourly' ? '' : 'hide'}>
        {/* Hourly jobs content here */}
        <p>Showing Updated Jobs</p>
      </div>
    </div>
  );
};

export default JobSwitcher;
