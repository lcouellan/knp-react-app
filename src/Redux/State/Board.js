import { createReducer } from '../../Util'
import { always } from 'ramda'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  cards: [],
  isLoading: false
}

export const ADD_CARD = '@knp/Board/AddCard'
export const RECEIVE_CARD = '@knp/Board/ReceiveCard'

// addCard :: () -> Action ADD_CARD
export const addCard = always({ type: ADD_CARD })

// receiveCard :: () -> Action RECEIVE_CARD
export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
})

// Board :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [ADD_CARD]: state => ({
    ...state,
    isLoading: true
  }),
  [RECEIVE_CARD]: (state, { card }) => ({
    ...state,
    isLoading: false,
    cards: [
      ...state.cards,
      card
    ]
  })
})
