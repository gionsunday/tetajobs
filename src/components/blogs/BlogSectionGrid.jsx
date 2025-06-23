import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getImagePath';
import blogPosts from '../../data/data';



const handleSinglePost = (post) => {
alert('This is a placeholder for the single post functionality.');
  
}

const BlogGridItem = ({id, date, title, description, image, handleSinglePost}) => (
  <div className="grids5-info" onClick={handleSinglePost}>
    <Link to={`/blog-single/${id}/${`${title.replace(/\s+/g, '-').toLowerCase()}`}`} >
      <img src={image} alt={title} />
    </Link>
    <div className="blog-info">
      <h5>{date}</h5>
      <h4>
        <Link to={`/blog-single/${id}/${`${title.replace(/\s+/g, '-').toLowerCase()}`}`} >{title}</Link>
      </h4>
      <p>{description}</p>
    </div>
  </div>
);

const BlogGridSection = () => {
  return (
    <div className="w3l-grids-block-5">
      <section id="grids5-block">
        <h3 className="heading">Latest blog</h3>
        <div className="wrapper">
          <div className="d-grid">
            {blogPosts.map((post, index) => (
              <BlogGridItem key={index} {...post}  />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGridSection;
