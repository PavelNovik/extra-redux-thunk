import { Dispatch } from 'redux';
import { decksAPI } from './decks-api';
import { setDeckAC } from './decks-reducer';

export const getDeckTC = () => (dispatch: Dispatch) => {
    decksAPI.getDecks().then(res => dispatch(setDeckAC(res.data.items)))
}