import * as Board from './Board'

describe('Redux :: Module :: Board', () => {
  it('reduces to initial state', () => {
    const state = Board.default()

    expect(state).toEqual(Board.INITIAL_STATE)
  })

  it('reduces the add card action', () => {
    const s1 = Board.default()
    const action = Board.addCard()
    const s2 = Board.default(s1, action)

    expect(s2).not.toEqual(s1)

    const expectedState = { isLoading: true, cards: [] }

    expect(s2).toEqual(expectedState)
  })

  it('reduces receive card action', () => {
    const s1 = Board.default()
    const generate = Board.addCard()
    const s2 = Board.default(s1, generate)
    const receive = Board.receiveCard({ title: 'My title' })
    const s3 = Board.default(s2, receive)

    expect(s3).not.toEqual(s2)

    const expectedState = { isLoading: false, cards: [{ title: 'My title' }] }

    expect(s3).toEqual(expectedState)
  })
})
