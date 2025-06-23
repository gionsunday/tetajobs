// src/components/Company.jsx
import React, { useEffect, useState } from 'react';
import CategoryCard from '../ui/CategoryCard';
import allJobs from '../../data/jobData';



function countCategories(jobsArray) {
  // Create an object to store category counts
  const categoryCounts = {};

  // Iterate through each job and count categories
  jobsArray.forEach(job => {
    const category = job.category;
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  // Convert the counts object into an array of objects
  const result = Object.entries(categoryCounts).map(([category, count]) => {
    return { [category]: count };
  });

  return result;
}


const Company = () => {
  const categoryCounts = countCategories(allJobs);
  // console.log(categoryCounts)
  const [categories, setCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")

  useEffect(() => {
    setCategories(categoryCounts)
  }, [])

  

  return (
    <section className="w3l-companies-20">
      <div className="companies20">
        <h3 className="heading">Explore Categories</h3>
        <div className="wrapper">
          <div className="companies20-content">
            <div className="companies-wrapper">
              <div className="owl-carousel owl-theme">
                {categories.map((cat, idx) => {
                  const categoryName = Object.keys(cat)[0];
                  // console.log(categoryName)
                    
                  return(
                  <CategoryCard
                    key={idx}
                    title={Object.keys(cat)[0]}
                    openings={`${Object.values(cat)[0]}`}
                    iconClass={categoryName}
                  />
                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
