import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Board from './index'
import State from '../../Redux/State'
import TestRenderer from 'react-test-renderer'

describe('Component :: Board :: index', () => {

  it('checks the initial state and verify if the board is empty', () => {
    const store = createStore(State, State(), undefined)
    const inspector = TestRenderer.create(createElement(store, Board))

    inspector.root.findByProps({ className: 'myBoard' })
  })

  it('loads when a card is creating', () => {
    const store = createStore(State, State({ Board: { isLoading: true, cards: [] } }), undefined)
    const inspector = TestRenderer.create(createElement(store, Board))

    inspector.root.findByProps({ className: 'board loader' })
  })

  it('displays the cards and add "add another card button" when it is not creating any card', () => {
    const store = createStore(
      State,
      State({ Board: { isLoading: false, cards: [{ title: 'My title' }] } }),
      undefined
    )
    const inspector = TestRenderer.create(createElement(store, Board))

    inspector.root.findByProps({ className: 'board add-card' })
    inspector.root.findByProps({ className: 'card-title' })
  })
})

const createElement = (store, component) =>
  <Provider store={store}>
    {React.createElement(component)}
  </Provider>
