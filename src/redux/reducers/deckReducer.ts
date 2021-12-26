import { decks as dataDeck } from '../../utils/data' ;
import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD_TO_DECK,
  RESET_DECKS
} from './../actions/deckAction';

const deckReducer = (_state: any = {}, _action: any) => {
  switch (_action.type) {
    
    case RECEIVE_DECKS:
      const {decks} = _action.payload
      return {
        ..._state,
        ..._action.payload.decks
      }
    
    case ADD_DECK:
      const {title} = _action.payload 
      return {
        ..._state,
        [title]: {
          title,
          questions: []
        }
      }
    
    
    case REMOVE_DECK:
      const {id} = _action.payload;
      const { [id]: value, ...remainingDecks } = _state;
      console.log(remainingDecks)

      return remainingDecks
    
    
    case ADD_CARD_TO_DECK:
      const { deckId, card } = _action.payload;
      return {
        ..._state,
        [deckId]: {
          ..._state[deckId],
          questions: [..._state[deckId].questions].concat(card)
        }
      };
      
      
      
    case RESET_DECKS:
      return dataDeck
    
    
    default:
      return _state;
  }
}

export default deckReducer;