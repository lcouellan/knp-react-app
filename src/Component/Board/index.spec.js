import React from 'react'
import { createStore } from 'redux'
import { act } from 'react-test-renderer'
import Board from './index'
import State from '../../Redux/State'
import { addCard, receiveCard } from '../../Redux/State/Board'
import { createContainer } from '../../utils-test'

describe('Component :: Board :: index', () => {

  it('checks the initial state and verify if the board is empty', () => {
    const store = createStore(State, State(), undefined)
    let inspector

    act(() => {
      inspector = createContainer(<Board />, store)
    })

    expect(inspector).toMatchSnapshot()
  })

  it('loads when a card is creating', () => {
    const store = createStore(State, State(), undefined)
    let inspector

    act(() => {
      inspector = createContainer(<Board />, store)
    })

    act(() => {
      store.dispatch(addCard())
    })

    expect(inspector).toMatchSnapshot()
  })

  it('displays the cards and add "add another card button" when it is not creating any card', () => {
    const store = createStore(
      State,
      State(),
      undefined
    )
    let inspector

    act(() => {
      inspector = createContainer(<Board />, store)
    })

    act(() => {
      store.dispatch(receiveCard({ title: 'My test card' }))
    })

    expect(inspector).toMatchSnapshot()
  })
})
