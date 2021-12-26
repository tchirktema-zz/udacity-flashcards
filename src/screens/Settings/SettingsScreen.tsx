import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { HeaderComponent } from '../../components/Header/HeaderComponent'
import { resetStore } from '../../redux/actions/deckAction'
import { resetDecksApi } from '../../utils/api/decks'

export const SettingsScreen = () => {
  const dispatch = useDispatch();

  const handleResetAll = (e: any) => {
    e.preventDefault()
    dispatch(resetStore())
    resetDecksApi()
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Settings"/>
      <TouchableOpacity
          onPress={(e) => {handleResetAll(e)}}
      >
        <View style={styles.btnDeck}>
          <Text style={styles.btnText}>Reset All</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6f7"
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  btnDeck: {
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ec4749",
    fontWeight: "bold",
    fontSize: 90,
    margin: 12,
    color: "white"
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  }
})

export default connect(
  null,
  { resetStore }
)(SettingsScreen);