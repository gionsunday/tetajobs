// src/pages/HomePage.jsx
import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import Company from '../components/home/Company';
import CallToAction from '../components/home/CallToAction';
import JobSwitcher from '../components/general/JobSwitcher';
import FeatureSection from '../components/home/FeatureSection';
import Resources from '../components/home/Resources';
import LatestNews from '../components/general/LatestNews';
import AppSection from '../components/home/AppSection';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <HeroSection />
      <Company onCategorySelect={handleCategorySelect} />

      {selectedCategory && (
        <section className="category-jobs wrapper">
          <h2 className="text-xl font-bold">Jobs in {selectedCategory}</h2>
          {/* Replace with real job listings later */}
          <ul>
            <li>{selectedCategory} - Job 1</li>
            <li>{selectedCategory} - Job 2</li>
            <li>{selectedCategory} - Job 3</li>
          </ul>
        </section>
      )}
      <CallToAction />
      <FeatureSection />
      <Resources />
      <LatestNews />
      <AppSection />
    </>
  );
};

export default HomePage;
