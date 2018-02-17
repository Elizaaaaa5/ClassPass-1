import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Tutee extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to ClassPass!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
});