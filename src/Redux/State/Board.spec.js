import {
  setBlankCardTitle,
  INITIAL_STATE,
  default as reducer,
  showBlankCard,
  saveCard,
  removeBlankCard
} from './Board'

describe('Redux :: Module :: Board', () => {
  it('reduces to initial state', () => {
    expect(reducer()).toEqual(INITIAL_STATE)
  })

  it('reduces set blank card title action', () => {
    expect(
      reducer(INITIAL_STATE, setBlankCardTitle('test blank card title')),
    ).toEqual({
      ...INITIAL_STATE,
      blankCardTitle: 'test blank card title'
    })
  })

  it('reduces show blank card action', () => {
    expect(
      reducer(INITIAL_STATE, showBlankCard()),
    ).toEqual({
      ...INITIAL_STATE,
      isBlankCardVisible: true
    })
  })

  it('reduces save card action', () => {
    const s1 = reducer(INITIAL_STATE, setBlankCardTitle('test other title'))

    expect(s1).toEqual({
      ...INITIAL_STATE,
      blankCardTitle: 'test other title'
    })

    expect(
      reducer(s1, saveCard()),
    ).toEqual({
      ...s1,
      blankCardTitle: '',
      isBlankCardVisible: false,
      cards: [
        {
          title: 'test other title'
        }
      ]
    })
  })

  it('reduces remove blank card action', () => {
    const s1 = reducer(INITIAL_STATE, showBlankCard())
    const s2 = reducer(s1, setBlankCardTitle('do not save this title title'))

    expect(
      reducer(s2, removeBlankCard()),
    ).toEqual(INITIAL_STATE)
  })
})
