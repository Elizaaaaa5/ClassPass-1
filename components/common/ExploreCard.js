import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class ExploreCard extends Component {
  render () {
    return (
      <View style={styles.card}>
          <List>
            <ListItem
              roundAvatar
              title='Bugi'
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/1star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 2150</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$19/hr'
              />
          </List>
          <List>
              <ListItem
                roundAvatar
                title='Zane'
                subtitle={
                  <View style={styles.subtitleView}>
                    <Image source={require('../../glyph/ratings/1star.png')} style={styles.ratingImage}/>
                    <Text style={styles.ratingText}>CS 3205</Text>
                  </View>
                }
                avatar={require('../../images/avatar1.png')}
                rightTitle='$9/hr'
              />
            </List>
          <List>
            <ListItem
              roundAvatar
              title='Jason'
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../../glyph/ratings/1star.png')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>CS 2150</Text>
                </View>
              }
              avatar={require('../../images/avatar1.png')}
              rightTitle='$10/hr'
              />
          </List>
          <List>
              <ListItem
                roundAvatar
                title='Luyao'
                subtitle={
                  <View style={styles.subtitleView}>
                    <Image source={require('../../glyph/ratings/1star.png')} style={styles.ratingImage}/>
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
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  card: {
    //backgroundColor: '#1a1a1c',
  }
})
