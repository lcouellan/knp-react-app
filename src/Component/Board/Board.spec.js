import React from 'react'
import Board from './Board'
import TestRenderer, { act } from 'react-test-renderer'

describe('Component :: Board :: Board', () => {
  it('loads when a card is creating', () => {
    let inspector

    act(() => {
      inspector = TestRenderer.create(
        <Board
          isLoading={true}
          cards={[]}
        />
      )
    })

    expect(inspector).toMatchSnapshot()
  })

  it('displays the cards and add "add another card button" when it is not creating any card', () => {
    let inspector

    act(() => {
      inspector = TestRenderer.create(
        <Board
          isLoading={false}
          cards={[{ title: 'My title' }]}
        />
      )
    })

    expect(inspector).toMatchSnapshot()
  })
})
