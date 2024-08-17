import React from 'react';
import Card from './Card';

const Cards = ({ cards }) => {
  return (
    <div className="cards" >
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Cards;
