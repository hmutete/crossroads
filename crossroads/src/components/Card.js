import React from 'react';
import '../styles/Card.css'; // Optional: Import CSS for styling

const Card = ({ count, description }) => {
  return (
    <div className="card">
      <h3 className="card-count">{count}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;