import React from 'react'
import { Provider } from 'react-redux'
import Board from './Board'

export default ({
  store
}) =>
  <Provider store={store}>
    <div>
      <h1>TODO List</h1>
      <p>My own simple TODO List</p>
      <Board />
    </div>
  </Provider>
