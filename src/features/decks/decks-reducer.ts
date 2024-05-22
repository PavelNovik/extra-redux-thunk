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
    case 'DECKS/ADD-DECK': {
      return { ...state, decks: [action.deck, ...state.decks] }
    }
    default:
      return state
  }
}

type DecksActions = SetDeck | AddDeck
type SetDeck = ReturnType<typeof setDeckAC>

export const setDeckAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS' as const,
    decks
  }
}
type AddDeck = ReturnType<typeof addDeckAC>
export const addDeckAC = (deck: Deck) => {
  return {
    type: 'DECKS/ADD-DECK' as const,
    deck
  }
}