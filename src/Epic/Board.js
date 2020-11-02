import { combineEpics, ofType } from 'redux-observable'
import * as Board from '../Redux/State/Board'
import { map } from 'rxjs/operators'

export const addCardEpic = (action$) => action$.pipe(
  ofType(Board.ADD_CARD),
  map(() => ({
    title: 'My title'
  })),
  map(Board.receiveCard)
)

export default combineEpics(
  addCardEpic
)