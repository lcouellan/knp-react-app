import { createReducer } from '../../utils'
import { always } from 'ramda'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  cards: [],
  isBlankCardVisible: false,
  blankCardTitle: ''
}

export const SAVE_CARD = '@knp/Board/SaveCard'
export const SET_BLANK_CARD_TITLE = '@knp/Board/SetBlankCardTitle'
export const TOGGLE_BLANK_CARD = '@knp/Board/ToggleBlankCard'
export const REMOVE_BLANK_CARD = '@knp/Board/RemoveBlankCard'


// saveCard :: () -> Action SAVE_CARD
export const saveCard = always({ type: SAVE_CARD })

// setBlankCardTitle :: () -> Action SET_BLANK_CARD_TITLE
export const setBlankCardTitle = cardTitle => ({
  type: SET_BLANK_CARD_TITLE,
  cardTitle
})

// toggleBlankCard :: () -> Action TOGGLE_BLANK_CARD
export const toggleBlankCard = always({ type: TOGGLE_BLANK_CARD })

// removeBlankCard :: () -> Action REMOVE_BLANK_CARD
export const removeBlankCard = always({ type: REMOVE_BLANK_CARD })

// Board :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [SAVE_CARD]: state => ({
    ...state,
    blankCardTitle: '',
    isBlankCardVisible: false,
    cards: [
      ...state.cards,
      {
        title: state.blankCardTitle
      }
    ]
  }),
  [SET_BLANK_CARD_TITLE]: (state, { cardTitle }) => ({
    ...state,
    blankCardTitle: cardTitle
  }),
  [TOGGLE_BLANK_CARD]: state => ({
    ...state,
    isBlankCardVisible: true
  }),
  [REMOVE_BLANK_CARD]: state => ({
    ...state,
    isBlankCardVisible: false,
    blankCardTitle: ''
  })
})
