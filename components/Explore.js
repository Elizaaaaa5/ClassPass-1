import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import Tutor from './Tutor.js';
import Tutee from './Tutee.js';

export default class Explore extends Component {
  render() {
    const exploreTabs =(props, alignSelf, marginTop)=> ({
      fontSize: 13,
      fontWeight: '600',
      marginHorizontal: 15,
      marginTop,
      alignSelf
    });
    const tutorTabs = TabNavigator({
      Tutor: {
        screen: Tutor,
        navigationOptions:{
          tabBarLabel: (props)=>(<Text style={exploreTabs(props, 'flex-end',30)}> Tutor</Text>)
        },  
      },
      Tutee: {
        screen: Tutee,
        navigationOptions:{
          tabBarLabel: (props)=>(<Text style={exploreTabs(props, 'flex-start',30)}> Tutee</Text>)
        },
      },
    });
    return (
      <View style={styles.container}>
        //<SearchBar style={styles.searchbar} 
          //placeholder='Search for tutors...'/>  
        <tutorTabs />        
        //<Text>Welcome to ClassPass!</Text>
        //<Text>Changes you make will automatically reload.</Text>
        //<Text>Shake your phone to open the developer menu.</Text>
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
