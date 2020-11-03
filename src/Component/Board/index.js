import { connect } from 'react-redux'
import { addCard } from '../../Redux/State/Board'
import { compose } from 'ramda'
import Board from './Board'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  cards: state.Board.cards,
  isLoading: state.Board.isLoading
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  addCard: compose(dispatch, addCard)
})

// Board :: ReactComponent
export default connect(mapStateToProps, mapDispatchToProps)(Board)
