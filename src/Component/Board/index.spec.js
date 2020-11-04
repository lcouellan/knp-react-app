import React from 'react'
import { createStore } from 'redux'
import { act } from 'react-test-renderer'
import Board from './index'
import State from '../../Redux/State'
import { setBlankCardTitle, saveCard, showBlankCard, removeBlankCard } from '../../Redux/State/Board'
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

  it('shows the blank card when you click on "Add an other card" button', () => {
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
      store.dispatch(showBlankCard())
    })

    expect(inspector).toMatchSnapshot()
  })

  it('displays the cards when a card is added', () => {
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
      store.dispatch(setBlankCardTitle('My card'))
      store.dispatch(saveCard())
    })

    expect(inspector).toMatchSnapshot()
  })

  it('remove the blank card and empty it when you press the escape button', () => {
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
      store.dispatch(setBlankCardTitle('Do not save this title'))
      store.dispatch(removeBlankCard())
    })

    expect(inspector).toMatchSnapshot()
  })
})
