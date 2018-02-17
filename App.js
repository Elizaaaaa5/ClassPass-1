import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
//import Explore from './components/Explore.js';
import Chat from './components/Chat.js';
import Profile from './components/Profile.js';
import Tutor from './components/Tutor.js';
import Tutee from './components/Tutee.js';


export default class App extends Component {
  render() {
    const exploreTabs =(props, alignSelf, marginTop)=> ({
      fontSize: 13,
      fontWeight: '600',
      marginHorizontal: 15,
      marginTop,
      alignSelf
    });
    const indication =(props,alignSelf)=> ({
      backgroundColor: props.activeTintColor,
      alignSelf: 'flex-end',
    });
    const TutorTabs = TabNavigator({
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
    }, {
      tabBarComponent: (props)=> <TabBarTop {...props} indication={indication(props, 'flex-end')} />,
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#20b2aa',
        style: {
          backgroundColor: '#fff',
        },
      }
    });

    const MainNavigator = TabNavigator({
      Explore: { screen: TutorTabs},
      Chat:    { screen: Chat},
      Profile: { screen: Profile},
    }, {
      tabBarOptions: {
        style: {
          backgroundColor: '#1a1a1c',
        }
      }
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
