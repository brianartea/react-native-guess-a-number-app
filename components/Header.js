//, { useState }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    paddingTop: 50,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 22
  }
});

export default Header;