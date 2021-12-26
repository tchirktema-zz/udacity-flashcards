import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import AddCardScreen from '../Card/AddCardScreen'
import { Quizz } from '../Quizz/Quizz'
import DeckDetail from './DeckDetail'
import HomeDeckScreen from './HomeDeckScreen'

export type StackParamList = {
  HomePage: undefined,
  DeckDetail: undefined,
  AddCardScreen: undefined,
  Quizz: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()


export const  DeckNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' >
      <Stack.Screen
        name='HomePage'
        component={HomeDeckScreen}
        options={
          { title: "HomePage", headerShown: false }} />
      <Stack.Screen
        name='DeckDetail'
        component={DeckDetail}
        options={{ title: "Detail Deck" }} />
      <Stack.Screen
        name='AddCardScreen'
        component={AddCardScreen}
        options={{ title: "Add Card" }} />
      <Stack.Screen
        name='Quizz'
        component={Quizz}
        options={{ title: "Quizz",headerShown: false }} />
    </Stack.Navigator>
  )
}

