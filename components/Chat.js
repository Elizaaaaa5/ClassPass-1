import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';




export default class Chat extends Component {



  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={}
          onClearText={}
          placeholder='Type Here...' />
      </View>
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