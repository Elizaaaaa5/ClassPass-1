import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TuteeCard from './common/TuteeCard.js';

export default class Tutee extends Component {
  render() {
    return (
      <TuteeCard />
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
