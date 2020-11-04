import React from 'react'

// Board :: Props -> React.Component
export default ({
  addCard,
  cards,
  cardTitle,
  isBlankCardVisible,
  saveCard,
  setBlankCardTitle,
}) =>
  <main className="my-board">

    <input
      className={isBlankCardVisible ? "new-card" : "new-card hidden"}
      placeholder="What needs to be done?"
      value={cardTitle}
      onChange={e => setBlankCardTitle(e.target.value)}
      onKeyUp={e => e.keyCode === 13 && saveCard(e.target.value)}
    />

    {cards.map((value, key) =>
      <div key={key} className="card">
        <h3 className="card-title">{value.title}</h3>
      </div>
    )}

    <button className="board add-card" onClick={addCard}>Add another card</button>
  </main>
