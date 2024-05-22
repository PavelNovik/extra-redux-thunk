import { Dispatch } from 'redux';
import { Deck, decksAPI } from './decks-api';
import { addDeckAC, removeDeckAC, setDeckAC } from './decks-reducer';

export const getDeckTC = () => (dispatch: Dispatch) => {
    decksAPI.getDecks().then(res => dispatch(setDeckAC(res.data.items)))
}

export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
    return decksAPI.addDeck(name).then(res => dispatch(addDeckAC(res.data as Deck)))
}

export const removeDeckTC = (id: string) => (dispatch: Dispatch) => {
    decksAPI.removeDeck(id).then(res => dispatch(removeDeckAC(id)))
}