import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
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
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#fff',
        },
      }
    });

    return (
      <View style={styles.container}>
        <Text>hello </Text>
        <Text>bitch </Text>
        <Text>! </Text>
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
