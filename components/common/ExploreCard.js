import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class ExploreCard extends Component {
  render () {
    return (
      <View style={{backgroundColor: '#000000'}}>
          <List>
            <ListItem
              containerStyle={{backgroundColor: '#1a1a1c'}}
              roundAvatar
              title='Bugi'
              titleStyle={{color: '#FFFFFF'}}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/1star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 2150</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$19/hr'
              />
            <ListItem
              containerStyle={{backgroundColor: '#1a1a1c'}}
              roundAvatar
              title='Zane'
              titleStyle={{color: '#FFFFFF'}}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/2star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 3205</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$9/hr'
            />
            <ListItem
              containerStyle={{backgroundColor: '#1a1a1c'}}
              roundAvatar
              title='Jason'
              titleStyle={{color: '#FFFFFF'}}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/2star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 2150</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$10/hr'
            />
            <ListItem
              containerStyle={{backgroundColor: '#1a1a1c'}}
              roundAvatar
              title='Luyao'
              titleStyle={{color: '#FFFFFF'}}
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/3star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 2150</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$15/hr'
            />
          </List>
      </View>
    );
  }
}
styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: '#1a1a1c',
  },
  ratingImage: {
    height: 19.21,
    width: 70
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  card: {
    borderTopWidth: 1,
    borderBottomColor: '#6c6c6c',
    backgroundColor: '#1a1a1c',
  }
})
