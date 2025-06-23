import React from 'react';
import FaqItem from './FaqItem';

const FaqColumn = ({ label, items }) => {
  return (
    <div className="faq-column">
      <label>{label}</label>
      {items.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqColumn;
