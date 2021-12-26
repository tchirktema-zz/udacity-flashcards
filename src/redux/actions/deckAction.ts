import { Card } from "../../models/Card";
import { getDecks } from "../../utils/api/decks";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
export const RESET_DECKS = 'RESET_DECKS';


export const receiveDecks = (decks: any[]) => {
  return {
    type: RECEIVE_DECKS,
    payload: {
      decks
    }
  }
}

export const addDeck = (title:string)  =>{
  return {
    type: ADD_DECK,
    payload: {
      title
    }
  };
}

export const removeDeck = (id:string) =>{
  return {
    type: REMOVE_DECK,
    payload: {
      id
    }
  };
}

export const addCardToDeck = (deckId: string, card: Card) =>{
  return {
    type: ADD_CARD_TO_DECK,
    payload: {
      deckId,
      card
    }
  };
}

export const resetStore = () => {
  return {
    type: RESET_DECKS
  };
}

export const initialState =  () => {
  return (dispatch : any) => {
    return getDecks().then(decks => {
      dispatch(receiveDecks(decks));
    });
  }; 
}