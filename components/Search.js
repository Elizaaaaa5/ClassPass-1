import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-navigation';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar 
          placeholder='Search...'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }
});
