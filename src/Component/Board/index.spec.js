import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
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

    inspector.root.findByProps({ className: 'myBoard' })
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

    inspector.root.findByProps({ className: 'board loader' })
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

    inspector.root.findByProps({ className: 'board add-card' })
    inspector.root.findByProps({ className: 'card-title' })

    expect(inspector).toMatchSnapshot()
  })
})

const createElement = (store, component) =>
  <Provider store={store}>
    {React.createElement(component)}
  </Provider>
