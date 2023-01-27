import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {
  const [value, onChangeText] = React.useState('')
  var hehehaha = 'haha'
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>{hehehaha}</Text>
      <TextInput
        editable
        placeholder='Input Text Here'
        onChangeText={text => onChangeText(text)}
        value={value}/>
        <Button
          title='Submit'
          onPress={() => Alert.alert(value)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5 ,
  },
});
