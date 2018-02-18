import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import Tutor from './Tutor.js';
import Tutee from './Tutee.js';
import Search from './Search.js';

export default class Explore extends Component {
  render() {
    const exploreTabs =(props, alignSelf, marginTop)=> ({
      fontSize: 16,
      fontWeight: '600',
      marginHorizontal: 15,
      marginTop,
      alignSelf,
      color: '#fff',
    });
    const indication =(props,alignSelf)=> ({
      backgroundColor: props.activeTintColor,
      alignSelf: 'flex-end',
    });
    const TutorTabs = TabNavigator({
      Tutor: {
        screen: Tutor,
        navigationOptions:{
          tabBarLabel: (props)=>(<Text style={exploreTabs(props, 'flex-end',20)}> Tutor</Text>)
        },
      },
      Tutee: {
        screen: Tutee,
        navigationOptions:{
          tabBarLabel: (props)=>(<Text style={exploreTabs(props, 'flex-start',20)}> Tutee</Text>)
        },
      },
    }, {
      tabBarComponent: (props)=> <TabBarTop {...props} indication={indication(props, 'flex-end')} />,
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#fff',
        style: {
          //marginTop: 20,
          backgroundColor: '#000',
        },
      }
    });
     
    const ExploreNav = StackNavigator({
      StackOne: { screen: TutorTabs },
      StackTwo: { screen: Search },
    });
    return (
        <ExploreNav />
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
