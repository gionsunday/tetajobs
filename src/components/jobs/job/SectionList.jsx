import React from 'react';

const SectionList = ({ title, items }) => (
  <div className="single-left1">
    <h5 className="card-title">{title}</h5>
    <ul className="details-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default SectionList;