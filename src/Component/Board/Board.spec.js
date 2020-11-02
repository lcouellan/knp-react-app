import React from 'react'
import Board from './Board'
import TestRenderer from 'react-test-renderer'

describe('Component :: Board :: Board', () => {
  it('loads when a card is creating', () => {
    const inspector = TestRenderer.create(
      <Board
        isLoading={true}
        cards={[]}
      />
    )

    inspector.root.findByProps({ className: 'board loader' })
  })

  it('displays the cards and add "add another card button" when it is not creating any card', () => {
    const inspector = TestRenderer.create(
      <Board
        isLoading={false}
        cards={[{ title: 'My title' }]}
      />
    )

    inspector.root.findByProps({ className: 'board add-card' })
    inspector.root.findByProps({ className: 'card-title' })
  })
})
