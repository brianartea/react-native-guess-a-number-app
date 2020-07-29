//, { useState }
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  }
});

export default Card;