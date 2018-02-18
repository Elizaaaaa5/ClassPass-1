import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TuteeCard from './common/TuteeCard.js';

export default class Tutee extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TuteeCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
