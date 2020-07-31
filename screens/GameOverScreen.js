import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //source={{uri: 'https://rourimage/images/image.jpg'}}
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
        <BodyText style={styles.resultText}>Your number was: <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
        <View style={styles.margin}><MainButton onPress={props.onRestart}>
          NEW GAME
        </MainButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginVertical: 15
  },
  margin: {
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOver;