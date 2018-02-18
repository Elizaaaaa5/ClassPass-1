import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

  const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
   // more items
];


export default class Chat extends Component {

renderRow (rowData, sectionID) {
  return (
    <ListItem
      avatar={<Avatar
                rounded
                source={rowData.avatar_url && {uri: rowData.avatar_url}}
                title={rowData.name[0]}
              />}
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
    />
  );
}

render () {
  return (
    <List>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
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