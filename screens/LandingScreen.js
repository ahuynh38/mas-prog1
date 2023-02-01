import { StyleSheet, View, TextInput, Alert, Text } from 'react-native';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import Button from '../components/Button';

const firebaseConfig = {
    apiKey: "AIzaSyB-eKo4OfSpSl_-qlD_B_PlpUM8l3epUKM",
    authDomain: "mas-prog1.firebaseapp.com",
    projectId: "mas-prog1",
    storageBucket: "mas-prog1.appspot.com",
    messagingSenderId: "996718094",
    appId: "1:996718094:web:9d7cf1732e1df67e79ae5f"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
  
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default function LandingScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState("")
    const [pass, onChangePass] = React.useState("")
    const [isSignedIn, onChange] = React.useState(false)
  
    const onLoginPress = () => {
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // signed in
          const user = userCredential.user;
          onChangeEmail('')
          onChangePass('')          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });

    }
  
    const onRegisterPress = () => {
      navigation.navigate('Register')
    }

    const onSignOutPress = () => {
      if (isSignedIn) {
        signOut(auth)
      } else {
        alert("You are not currently signed in.")
      }
      
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        onChange("Signed in as " + email + ".")
      } else {
        onChange("Currently signed out.")
      }
    });

  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          onChangeText={onChangePass}
          value={pass}
          secureTextEntry='true'
        />
        <Button
          label="Login"
          onPress={onLoginPress}
        />
        <Button
          label="Register"
          onPress={onRegisterPress}
        />
        <Button
          label="Sign Out"
          onPress={onSignOutPress}
        />
        <Text>{isSignedIn}</Text>
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
      width: 320,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });
  