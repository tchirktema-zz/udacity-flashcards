import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { DeckTile } from '../../components/Deck/DeckTile'
import {HeaderComponent} from '../../components/Header/HeaderComponent'
import { initialState } from '../../redux/actions/deckAction'
import { StackParamList } from './DeckNavigation'


const HomeDeckScreen = (props: any) => {

  const {decks, initialState,route,navigation} = props

  const dispatch = useDispatch()

  useEffect(() => {
    handleInitialisation()
  },[decks])

  const handleInitialisation = () => {
    initialState()
    
  }

  const renderItem = ({item}:any) => {
    return <DeckTile deck={item} navigation={navigation}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <HeaderComponent title="Home"/>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        data={Object.values(decks)}
      />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 17,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#ffc10f",
    flex: 1
  }
})

const mapStateToProps = (state: any,{route,navigation}:NativeStackScreenProps<StackParamList,"Home">) => {
 
  return {
    decks: state.decks,
    route: route,
    navigation: navigation
  }
}

export default connect(mapStateToProps,{initialState})(HomeDeckScreen)
