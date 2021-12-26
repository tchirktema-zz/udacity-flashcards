import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PagerView } from 'react-native-pager-view';
import { connect } from 'react-redux';

const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};


export default function PageView({ questions, navigation }: any) {
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [nextQuestion, setNextQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const questionCount = questions.length
 
  const handleAnswerCorrect = (e:any) => {
    e.preventDefault()
    setCorrect(correct + 1)
    handleNextQuestion(e)
  }
  
  const handleAnswerInCorrect = (e: any) => {
    e.preventDefault()
    setIncorrect(incorrect + 1)
    handleNextQuestion(e)
  }

  const handleNextQuestion = (e: any) => {
    e.preventDefault()
    const data = questionCount - 1
    if (nextQuestion < data) {
      setNextQuestion(nextQuestion +1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestartQuizz = (e: any) => {
    e.preventDefault()
    setShowResult(false)
    setCorrect(0)
    setIncorrect(0)
    setNextQuestion(0)
  }

  const handleGoHome = (e: any) => {
    e.preventDefault()
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.pageStyle}>
      {
        showResult ?
        <View  style={styles.pageStyle}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>Results</Text>
            <Text style={styles.questionBody}>{correct} / { questionCount}</Text>
            <Text style={styles.questionTitleAnswer}>Percentage correct</Text>
            <Text style={styles.questionBodyPercentage}>{Math.round((correct/questionCount)*100)} %</Text>
          </View>
          <TouchableOpacity onPress={(e) => handleRestartQuizz(e)}>
            <View style={styles.btnCorrect}>
            <Text style={styles.textQuizz}>Restart Quizz</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => handleGoHome(e)}>
            <View style={styles.btnInCorrect}>
              <Text style={styles.textQuizz}>Home</Text>
            </View>
          </TouchableOpacity>
        </View> :
        <View  >
          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>Question</Text>
            <Text style={styles.questionBody}>{questions[nextQuestion].question}</Text>
            <Text style={styles.questionTitleAnswer}>Answer</Text>
            <Text style={styles.questionBodyAnswer}>{questions[nextQuestion].answer}</Text>
          </View>
          <TouchableOpacity onPress={(e) => handleAnswerCorrect(e)}>
            <View style={styles.btnCorrect}>
            <Text style={styles.textQuizz}>CORRECT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => handleAnswerInCorrect(e)}>
            <View style={styles.btnInCorrect}>
              <Text style={styles.textQuizz}>INCORRECT</Text>
            </View>
          </TouchableOpacity>
        </View> 
        
      }
    </View>
  )
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1
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
  questionTitleAnswer: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 20
  },
  questionBody: {
    fontSize: 23
  },
  questionBodyAnswer: {
    fontSize: 23,
    alignItems: "center",
    justifyContent: "center"
  },
  questionBodyPercentage: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center"
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