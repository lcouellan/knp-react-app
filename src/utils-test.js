import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

export const createContainer = (component, store) => renderer.create(
  <Provider store={store}>
    {component}
  </Provider>,
)
