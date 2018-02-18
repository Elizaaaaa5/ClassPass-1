import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});