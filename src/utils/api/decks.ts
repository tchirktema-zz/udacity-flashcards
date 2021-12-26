import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '../../models/Card';
import { decks } from '../data';

const DECKS_STORAGE_KEY = 'storage:decks';

export function getData() {
  return decks;
}

function formatDeckResults(results: any) {
  return results === null ? decks : JSON.parse(results);
}

export const getDecksOld = async() => {
  // return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
  try {
    const decksOld = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return formatDeckResults(decksOld)
  } catch (e) {
    console.log("Error to getDecksOld() :  ",e)
  }
}

export const getDecks = async () => {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }

    return storeResults === null ? decks : JSON.parse(storeResults);
  } catch (e) {
    console.log("Error to getDecks() :  ",e)
  }
}

export const getDeck = async (id: string) => {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return storeResults === null ? null : JSON.parse(storeResults)[id];
  } catch (err) {
    console.log(err);
  }
}

export const saveDeckTitle = async(title:string) => {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export const  removeDeckApi= async(key: string) =>{
  try {
    const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const data = results != null? JSON.parse(results) : null;
    
    if (data) {
      data[key] = undefined;
      delete data[key];
    }

    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

export const addCardToDeckApi = async (title:string, card:Card) =>{
  try {
    const deck = await getDeck(title);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card)
        }
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export const resetDecksApi = async() =>{
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (err) {
    console.log(err);
  }
}