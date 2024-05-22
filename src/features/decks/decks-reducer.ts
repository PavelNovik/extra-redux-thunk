import { Deck } from './decks-api'
const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    default:
      return state
  }
}

type DecksActions = SetDeck
type SetDeck = ReturnType<typeof setDeckAC>

export const setDeckAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS' as const,
    decks
  }
}