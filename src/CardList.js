import { Card } from "./Card";
// import { useState } from "react";

export function CardList({
  cardDetails,
  handleShowCards,
  handleShowFaq,
  handleShowForm,
}) {
  return (
    <div className="card-content-box">
      {cardDetails.map((card) => (
        <Card
          card={card}
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          button={card.button}
          handleShowCards={handleShowCards}
          handleShowFaq={handleShowFaq}
          handleShowForm={handleShowForm}
        />
      ))}
    </div>
  );
}
