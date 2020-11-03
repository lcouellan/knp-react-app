import {
  addCard,
  receiveCard,
  INITIAL_STATE,
  default as reducer
} from './Board'

describe('Redux :: Module :: Board', () => {
  it('reduces to initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE)
  })

  it('reduces the add card action', () => {
    expect(
      reducer(INITIAL_STATE, addCard()),
    ).toEqual({
      ...INITIAL_STATE,
      isLoading: true
    })
  })

  it('reduces receive card action', () => {
    const s1 = reducer(INITIAL_STATE, addCard())
    const s2 = reducer(s1, receiveCard({ title: 'My title' }))

    expect(s2).toEqual({
      ...s1,
      cards: [{
        title: 'My title'
      }],
      isLoading: false
    })
  })
})
