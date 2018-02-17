import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Explore from './components/Explore.js';
import Chat from './components/Chat.js';
import Profile from './components/Profile.js';


export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      Profile: { screen: Profile},
      Chat:    { screen: Chat},
      Explore: { screen: Explore}
    });
    return (
//      <View style={styles.container}>
//        <Text>Welcome to ClassPass!</Text>
//        <Text>Changes you make will automatically reload.</Text>
//        <Text>Shake your phone to open the developer menu.</Text>
//      </View>
        <MainNavigator />  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
