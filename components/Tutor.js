import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-navigation';
import ExploreCard from './common/ExploreCard.js';

export default class Tutor extends Component {
  render() {
      return (
        <ExploreCard />
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
