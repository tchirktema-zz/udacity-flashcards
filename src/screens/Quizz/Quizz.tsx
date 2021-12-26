import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PagerView } from 'react-native-pager-view';
import { connect } from 'react-redux';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import PageView from '../../components/pageview/pageview';
import { StackParamList } from '../Decks/DeckNavigation';

export const Quizz = ({route,navigation}:NativeStackScreenProps<StackParamList,"Quizz">) => {
  const params = route.params;
  const deck = params?.deck
  const questions = params?.deck.questions 
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title={"Quizz"}/>
      <PageView questions={questions} navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffc10f',
  },
  pageStyle: {
    flex: 1,
    // paddingTop: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingBottom: 16,
    backgroundColor: '#ffc10f',
    // justifyContent: 'space-around'
  },
  questionContainer: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 20
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  },
  questionBody: {
    fontSize: 23
  },
  btnCorrect: {
    margin: 10,
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
  btnInCorrect: {
    margin: 10,
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
    backgroundColor: "#dd2e30",
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
});

const mapStateToProps = (state: any,{route,navigation}:NativeStackScreenProps<StackParamList,"Quizz">) => {
  const params = route.params;
  const title = params?.title || "undefined";
  const deck = state.decks[title];
  
  console.log(title)
  return {
    deck: deck,
    navigation: navigation
  }
}

export default connect(mapStateToProps)(Quizz)

