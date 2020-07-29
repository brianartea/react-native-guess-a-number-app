import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Your number was: {props.userNumber}</Text>
      <Button title="START NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOver;