// src/components/FeatureSection.jsx
import React, { useState } from 'react';
import JobFeatureBox from '../ui/JobFeatureBox';
import imgJob1 from './assets/images/job1.png';
import imgJob2 from './assets/images/job2.png'; 
import imgJob3 from './assets/images/job3.png';
import imgJob4 from './assets/images/job4.png';
import allJobs from '../../data/jobData';



const FeatureSection = () => {
  const [filter, setFilter] = useState('recent'); // 'recent' or 'updated'

  // Filter logic: determine recent (< 1 month) and updated (>= 1 month)
  const recentJobs = allJobs.slice(0,7).filter(job => {
    const time = job.time.toLowerCase();
    return time.includes('week') || time.includes('day');
  });

  const updatedJobs = allJobs.filter(job => {
    const time = job.time.toLowerCase();
    return time.includes('month');
  });

  const jobsToDisplay = filter === 'recent' ? recentJobs : updatedJobs;

  return (
    <section className="w3l-price-2">
      <div className="price-main">
        <h3 className="heading">Featured Jobs</h3>
        <div className="wrapper">
          <div className="pricing-style-w3ls">
            <div className="full text-center">
              <label
                className={`toggler ${filter === 'recent' ? 'toggler--is-active' : ''}`}
                id="filt-monthly"
                onClick={() => setFilter('recent')}
              >
                Recent Jobs
              </label>
              <div className="toggle" id="switcher"></div>
              <label
                className={`toggler ${filter === 'updated' ? 'toggler--is-active' : ''}`}
                id="filt-hourly"
                onClick={() => setFilter('updated')}
              >
                Updated Jobs
              </label>
            </div>

            <div className="pricing-chart">
              {jobsToDisplay.length > 0 ? (
                jobsToDisplay.map((job, idx) => <JobFeatureBox key={idx} {...job} />)
              ) : (
                <p className="text-center">No jobs available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
