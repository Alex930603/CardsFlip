import React, { useState } from 'react';
// brutto frocio

const Card = ({
  avatar,
  first_name,
  second_name,
  employment,
  username,
  phone_number,
}) => {
  return (
    <div className="full-card">
      <div className="full-card__side full-card__side--front">
        <img src={avatar} alt={username} />
        <h1>
          {first_name}
          {second_name}
        </h1>
        <h2>{employment.title}</h2>
      </div>
      {/* // brutto frocio */}

      <div className="full-card__side full-card__side--back">
        <h1>{phone_number}</h1>
        <h2>{employment.title}</h2>
      </div>
    </div>
  );
};

export default Card;
