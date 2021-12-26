import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { HeaderComponent } from '../../components/Header/HeaderComponent'
import { removeDeck } from '../../redux/actions/deckAction'
import { removeDeckApi } from '../../utils/api/decks'
import { StackParamList } from './DeckNavigation'
import { CommonActions } from '@react-navigation/native';

export const DeckDetail = (props: any) => {
  const { deck, navigation } = props
  const dispatch = useDispatch()

  useEffect(() => {
    if (!deck.title) {
      navigation.dispatch(CommonActions.goBack())
    }
  },[])

  const handleDeleteDeck = (deck: any) => {
    dispatch(removeDeck(deck.title))
    removeDeckApi(deck.title)
    navigation.dispatch(CommonActions.goBack())
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title={deck.title}/>
      <View style={styles.card}>
        <Text style={styles.text}>{deck.questions.length} card(s)</Text>
      </View>

      <TouchableOpacity onPress={() => {
        navigation.navigate('AddCardScreen',{
          title: deck.title
        })
      }}>
        <View style={styles.cardBtn}>
          <Text style={styles.text}>ADD CARD</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Quizz',{
          deck: deck
        })
      }}>
        <View style={styles.cardBtnQuizz}>
          <Text style={styles.textQuizz}>START QUIZZ</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteDeck(deck)}>
        <View style={styles.cardBtnQuizz}>
          <Text style={styles.textQuizz}>REMOVE DECK</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#f45254",
    flex: 1
  },
  card: {
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom:10,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
  },
  cardBtn: {
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom:10,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#ffc10f",
    
  },
  cardBtnQuizz: {
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom:10,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#7c3cff",
    
  },
  text: {
    fontWeight: "bold",
    fontSize: 20
  },
  textQuizz: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  }
})

const mapStateToProps = (state: any,{route,navigation}:NativeStackScreenProps<StackParamList,"DeckDetail">) => {
  const params = route.params;
  const title = params?.title || "undefined";
  const deck = state.decks[title];
 
  return {
    deck: deck,
    navigation: navigation
  }
}

export default connect(mapStateToProps,{removeDeck})(DeckDetail)
