import React from 'react';
import { Text, Stylsheet, StyleSheet } from 'react-native';

const TitleText = props => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22
  }
});

export default TitleText;  