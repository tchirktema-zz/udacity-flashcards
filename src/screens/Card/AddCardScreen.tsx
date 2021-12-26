import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { HeaderComponent } from '../../components/Header/HeaderComponent'
import { addCardToDeck } from '../../redux/actions/deckAction'
import { StackParamList } from '../Decks/DeckNavigation'
import { Card } from '../../models/Card'
import { addCardToDeckApi } from '../../utils/api/decks'
import { CommonActions } from '@react-navigation/native'



export function AddCardScreen(props: any) {
  const { title, navigation } = props
  const message = "Add Question to "+ title+ " deck "
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (question != '' && answer != '') {
      const card : Card = {
        'question': question,
        'answer': answer
      }
      dispatch(addCardToDeck(title, card))
      addCardToDeckApi(title, card)
      navigation.dispatch(CommonActions.goBack())
    } else {
      Alert.alert("Error","Please enter a valid data")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <HeaderComponent title={message}/>
        <TextInput
          style={styles.input}
          onChangeText={setQuestion}
          value={question}
          placeholder='Please enter a question'
        />
        <TextInput
          style={styles.input}
          onChangeText={setAnswer}
          value={answer}
          placeholder='Please enter a answer'
        />

        <TouchableOpacity
          onPress={handleSubmit}
        >
        <View style={styles.btnDeck}>
          <Text>Add card</Text>
        </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe266"
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


const mapStateToProps = (state: any,{route,navigation}:NativeStackScreenProps<StackParamList,"AddCardScreen">) => {
  const params = route.params;
  const title = params?.title || "undefined";
  const deck = state.decks[title];
  return {
    title,
    navigation
  };
};

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddCardScreen);