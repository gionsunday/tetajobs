// src/components/CategoryCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categoryIcons = {
  "Software developer": "fa-code",
  "Development": "fa-laptop",
  "Customer service": "fa-headphones",
  "Designing": "fa-paint-brush",
  "Marketing": "fa-bullhorn",
  "Sales": "fa-line-chart",
  "App developer": "fa-apple",
  "Software trainee": "fa-clock-o",
  "Digital service": "fa-cogs",
  "Automotive": "fa-car",
};

const CategoryCard = ({ title, openings, iconClass }) => {
  const navigate = useNavigate();
  // console.log(title)

  const handleClick = () => {
    const routeName = title[0].toLowerCase();
    // console.log(routeName,title)
    navigate(`/jobs?category=${title}`);
  };

  return (
    <div className="item" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <a href="#link">{title}</a>
      <p>{openings} openings</p>
      <span className="pos-icon">
        <span className={`fa ${categoryIcons[iconClass]}`}></span>
      </span>
    </div>
  );
};

export default CategoryCard;
