import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import Search from './Search.js';




export default class Chat extends Component {

  meme() {
    var x = 1;
    x++;
  }

  render() {
    return (
      
      <View style={styles.container}>
        <SearchBar
         // onChangeText={meme()}
         // onClearText={meme()}
          placeholder='Type Here...' style={styles.searchbar}/>
          <List>
            <ListItem
              roundAvatar
              title='Limited supply! Its like digital gold!'
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>5 months ago</Text>
                </View>
              }
              avatar={require('../images/avatar1.jpg')}
            />
          </List>
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
  searchbar: {
    flex: 1,
    flexDirection: 'column',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});