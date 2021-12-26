import React from 'react'
import { Alert } from 'react-native';

export default function RemoveDeckModal(title: string) {
  console.log(title)
  const handleDelete = () => {

  }

  return (
    Alert.alert(
      "Delete Deck",
      "Are you sure to delete this deck ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDelete }
      ]
    )
  )
}

