import React from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import { HeaderComponent } from '../../components/Header/HeaderComponent'
import { addDeck } from '../../redux/actions/deckAction';
import { saveDeckTitle } from '../../utils/api/decks';

export const AddDeckScreen = () => {
  const [text, onChangeText] = React.useState("");

  const handleSubmit = () => {
    if (text === '') {
      Alert.alert('A deck title is required')
    } else {
      addDeck(text)
      saveDeckTitle(text)
      Alert.alert(`${text} deck is successfully add`)
      onChangeText("")
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <HeaderComponent title="Add Deck"/>
      <View >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Enter deck title'
        />
        <TouchableOpacity
          onPress={handleSubmit}
      >
        <View style={styles.btnDeck}>
          <Text>Add Deck</Text>
        </View>
      </TouchableOpacity>
      </View>
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
  }
})

export default connect(
  null,
  { addDeck }
)(AddDeckScreen);