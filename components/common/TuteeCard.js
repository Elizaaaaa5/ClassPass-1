import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rightTitle: '$9/hr',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  {
    name: 'Bugi Abdulkarim',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    course: 'CS 2150',
    rating: '../../glyph/ratings/3star.png'
  },
  
];


export default class TuteeCard extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <List containerStyle={{ marginTop: 0 }}>
            {list.map((l, i) => (
              <ListItem
                style={styles.cardStyle}
                containerStyle={{backgroundColor: '#1a1a1c'}}
                roundAvatar
                avatar={{ uri: l.avatar_url }}
                key={i}
                title={l.name}
                titleStyle={{color: '#FFFFFF'}}
                subtitle= {l.course}
                paddingTop={20}
                paddingBottom={20}
              />
            ))}
          </List>
        </ScrollView>
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
    height: 18.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 6,
    color: 'grey'
  },
  cardStyle: {
    height: 44,
    fontSize: 18,
    padding: 10
  }
})
