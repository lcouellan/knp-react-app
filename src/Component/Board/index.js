import { connect } from 'react-redux'
import { showBlankCard, saveCard, setBlankCardTitle } from '../../Redux/State/Board'
import { compose } from 'ramda'
import Board from './Board'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  cards: state.Board.cards,
  isBlankCardVisible: state.Board.isBlankCardVisible,
  cardTitle: state.Board.blankCardTitle
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  addCard: compose(dispatch, showBlankCard),
  saveCard: compose(dispatch, saveCard),
  setBlankCardTitle: compose(dispatch, setBlankCardTitle)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
