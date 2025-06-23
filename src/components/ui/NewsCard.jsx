import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NewsCard = ({ id, image, date, title, link, description }) => {
 
  // console.log(id)
  return (
    <div className="grids5-info">
      <Link to={`/blog-single/${id}/${`${title.replace(/\s+/g, '-').toLowerCase()}`}`}>
        <img src={image} alt="" />
      </Link>
      <div className="blog-info">
        <h5>{date}</h5>
        <h4>
          <Link to={`/blog-single/${id}/${`${title.replace(/\s+/g, '-').toLowerCase()}`}`}>{title}</Link>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
