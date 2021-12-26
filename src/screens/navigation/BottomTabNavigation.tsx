import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import HomeDeckScreen from '../Decks/HomeDeckScreen';
import {AddDeckScreen} from '../Decks/AddDeckScreen';
import {SettingsScreen} from '../Settings/SettingsScreen';
import { TabBarActiveTintColor } from '../../utils/constants/colors';
import { DeckNavigation } from '../Decks/DeckNavigation';

export type BottomParamList = {
  Home: undefined,
  AddDeck: undefined,
  Settings: undefined
}

const Tab = createBottomTabNavigator<BottomParamList>();


export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: TabBarActiveTintColor,
      tabBarInactiveTintColor: "gray",
      headerShown: false
    }}>
      <Tab.Screen
        name="Home"
        component={DeckNavigation}
        options={{
          title: "Home",
          tabBarIcon:({focused,color,size}: any) => (<MaterialIcons name='home' size={size} color={color}/>)
        }}
      />
      
      <Tab.Screen
        name="AddDeck"
        component={AddDeckScreen}
        options={{
          title: "Add Deck",
          tabBarIcon:({focused,color,size}: any) => (<MaterialIcons name='add-box' size={size} color={color}/>)
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon:({focused,color,size}: any) => (<MaterialIcons name='settings' size={size} color={color}/>)
        }}
      />
     
    </Tab.Navigator>
  )
}
