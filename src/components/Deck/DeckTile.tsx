import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const DeckTile =({deck,navigation}:any) =>{
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        key={deck.title}
        onPress={() => navigation.navigate('DeckDetail', {
          title: deck.title
        })}
      >
        <View style={styles.btnDeck}>
          <Text>{deck.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 17,
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 17
  },
  btnDeck: {
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: 90
  }
})