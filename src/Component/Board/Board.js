import React from 'react'

// Board :: Props -> React.Component
export default ({
  addCard,
  isLoading,
  cards
}) =>
  <main className="myBoard">
    {cards.map((value, key) =>
      <div key={key} className="card">
        <h3 className="card-title">{value.title}</h3>
      </div>
    )}

    {isLoading
      ? <div className="board loader">We are adding a new card...</div>
      : <button className="board add-card" onClick={addCard}>Add another card</button>
    }
  </main>
