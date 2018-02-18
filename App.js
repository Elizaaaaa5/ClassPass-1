import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import Explore from './components/Explore.js';
import Chat from './components/Chat.js';
import Profile from './components/Profile.js';
import Tutor from './components/Tutor.js';
import Tutee from './components/Tutee.js';
import ExploreIcon from './components/common/ExploreIcon.js';

export default class App extends Component {
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
          marginTop: 20,
          backgroundColor: '#1a1a1c',
        },
      }
    });
    
    const MainNavigator = TabNavigator({
      Explore: { 
        screen: Explore,
        tabBarOptions: {
          showLabel: false,
          tabBarIcon: ExploreIcon,
          showIcon: true,
        }
      },
      Chat:    { 
        screen: Chat
      },
      Profile: {
        screen: Profile},
      }, {
      tabBarOptions: {
        style: {
          backgroundColor: '#fff',
        }
      }
    });
    return (
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
