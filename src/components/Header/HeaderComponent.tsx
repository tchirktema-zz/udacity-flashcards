import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const  HeaderComponent = ({title}:any) =>{
  return (
    <View style={styles.container}>
        <Text style={styles.headerTitle}>{`${title}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 17,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold"
  }
})
