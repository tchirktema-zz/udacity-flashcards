import { createStore, combineReducers } from 'redux';
import middleware from '../middleware';
import deckReducer from './deckReducer';


const rootReducers = combineReducers({
  decks : deckReducer
})
export const store = createStore(rootReducers,middleware)