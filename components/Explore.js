import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
//import { SearchBar } from 'react-native-elements';
import Tutor from './Tutor.js';
import Tutee from './Tutee.js';

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello </Text>
        <Text>bitch </Text>
        <Text>! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
      marginTop: 25,
  },
  searchbar: {
    backgroundColor: '#1a1a1c',
  },
});
