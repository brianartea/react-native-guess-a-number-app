//, { useState }
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => { }} />
          <Button title="Confirm" onPress={() => { }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 27,
    marginVertical: 10

  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    marginTop: 20,
    alignItems: 'center',
    shadowColor: 'black',
    //textShadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

export default StartGameScreen;