import { connect } from 'react-redux'
import { addCard } from '../../Redux/State/Board'
import { compose } from 'ramda'
import Board from './Board'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Board
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  addCard: compose(dispatch, addCard)
})

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps)

// Board :: ReactComponent
export default container(Board)
