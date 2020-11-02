import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Board from './index'
import State from '../../Redux/State'
import TestRenderer from 'react-test-renderer'

describe('Component :: Board :: index', () => {
  let store

  beforeEach(() => {
    store = createStore(State, State(), undefined)
  })

  it('checks the initial state and verify if the board is empty', () => {
    const inspector = TestRenderer.create(createElement(store, Board))

    expect(store.getState().Board.isLoading).toBe(false)

    expect(store.getState().Board.cards.length).toEqual(0)

    inspector.root.findByProps({ className: 'myBoard' })
  })
})

const createElement = (store, component) =>
  <Provider store={store}>
    {React.createElement(component)}
  </Provider>
