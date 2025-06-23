import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <details>
      <summary>
        {question}
        <span className="fa control-icon-expand fa-chevron-down"></span>
        <span className="fa control-icon-close fa-times"></span>
      </summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqItem;
