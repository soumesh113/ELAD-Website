import React from 'react';
import "./cards.module.css"


const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <p class = "cont">{props.description}</p>
    </div>
  );
};


export const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the first card',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card 2',
    description: 'This is the second card',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card 3',
    description: 'This is the third card',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default Card;
