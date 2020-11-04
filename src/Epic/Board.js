import { isEscKey } from '../utils'
import * as Board from '../Redux/State/Board'
import { combineEpics } from 'redux-observable'
import { fromEvent } from 'rxjs'
import { filter, map } from 'rxjs/operators'

// removeBlankCardOnEscEpic :: Epic -> Observable Action *
const removeBlankCardOnEscEpic = () => fromEvent(document, 'keyup').pipe(
  filter(isEscKey),
  map(Board.removeBlankCard)
)

export default combineEpics(
  removeBlankCardOnEscEpic
)
