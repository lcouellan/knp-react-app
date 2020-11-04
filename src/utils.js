import { propOr, identity, prop, compose, equals, toLower } from 'ramda'

// createReducer :: (State, Object) -> (State, Action) -> State
export const createReducer = (initialState, handlers) =>
  (state = initialState, action = {}) =>
    propOr(identity, prop('type', action), handlers)(state, action)

// isKey :: String -> KeyboardEvent -> Boolean
const isKey = keyCode => compose(equals(keyCode), toLower, propOr('', 'key'))

// isEscKey :: KeyboardEvent -> Boolean
export const isEscKey = isKey('escape')

// isReturnKey :: KeyboardEvent -> Boolean
export const isReturnKey = isKey('13')
