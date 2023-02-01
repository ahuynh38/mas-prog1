import { StyleSheet, View, Text, TextInput } from 'react-native';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState("")
    const [pass, onChangePass] = React.useState("")

    const onRegisterPress = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        navigation.navigate("Login")
    }

    return(
        <View style={styles.container}>
            <Text>Hi! Register here!</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Email'
                value={email}
                onChangeText={onChangeEmail}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Password'
                secureTextEntry='true'
                value={pass}
                onChangeText={onChangePass}
            />
            <Button
                label="Register"
                onPress={onRegisterPress}
            />
        </View>
    )
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