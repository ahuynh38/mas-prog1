/*
This app is a "Hello World" basic app that will first allow users to authenticate
themselves by creating account, then upload strings to the cloud.
*/

import { StyleSheet, View, TextInput, Alert, } from 'react-native';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import Button from './components/Button';

const firebaseConfig = {
  // ask Andy for config details!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default function App() {
  const [text, onChangeText] = React.useState("")

  const onLoginPress = () => {
    alert("You just tried to login with " + text)
    try {
      const docRef = addDoc(collection(db, "users"), {
        username: text
      });
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  const onRegisterPress = () => {
    alert("You tried to register with " + text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Input Text Here'
        onChangeText={onChangeText}
        value={text}
        />
      <Button
        label="Login"
        onPress={onLoginPress}
      />
      <Button
        label="Register"
        onPress={onRegisterPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
