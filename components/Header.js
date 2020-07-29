//, { useState }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

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
    height: 120,
    paddingTop: 70,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    paddingBottom: 20
  }
});

export default Header;