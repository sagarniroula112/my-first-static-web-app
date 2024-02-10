export function Card({ card, handleShowFaq, handleShowForm }) {
  return (
    <>
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <button
          className={card.id === 1 ? "button1" : "button"}
          onClick={
            (card.id === 0 ? handleShowForm : undefined) ||
            (card.id === 1 ? handleShowFaq : undefined)
          }
        >
          {card.button}
        </button>
      </div>
    </>
  );
}
