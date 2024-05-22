import { Dispatch } from 'redux';
import { Deck, decksAPI } from './decks-api';
import { addDeckAC, setDeckAC } from './decks-reducer';

export const getDeckTC = () => (dispatch: Dispatch) => {
    decksAPI.getDecks().then(res => dispatch(setDeckAC(res.data.items)))
}

export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
    decksAPI.addDeck(name).then(res => dispatch(addDeckAC(res.data as Deck)))
}