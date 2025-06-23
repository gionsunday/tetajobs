import React from 'react';
import NewsCard from '../ui/NewsCard'; // adjust path as needed
import { getImagePath } from '../../utils/getImagePath';
import blogPosts from '../../data/data';

const LatestNews = () => {
  const newsItems = [
    {
      image: getImagePath('blog1.jpg'),
      date: 'October 7, 2019.',
      title: 'What to wear to a job interview',
      link: '/blog-single.html',
      description: 'First impressions matter — and what you wear can speak volumes before you even say a word',
    },
    {
      image: getImagePath('blog2.jpg'),
      date: 'October 7, 2019.',
      title: "Resume Writing Do's and Don'ts",
      link: '/blog-single.html',
      description: 'Your resume is your first handshake with a potential employer — make it count',
    },
    {
      image: getImagePath('blog3.jpg'),
      date: 'October 7, 2019.',
      title: 'What to wear to a job interview',
      link: '/blog-single.html',
      description: 'Dress like you already belong. Your outfit should reflect the company culture while...',
    },
  ];

  return (
    <div className="w3l-grids-block-5">
      <section id="grids5-block">
        <h3 className="heading">Latest News</h3>
        <div className="wrapper">
          <div className="d-grid">
            {blogPosts.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
