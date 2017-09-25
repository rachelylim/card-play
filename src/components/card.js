import React from 'react';

function Card({ header, content }) {
  return (
    <div className="card-container">
      <p className="card-header">{header}</p>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default Card;
