import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import book from '../../stylesheets/app/book/book';

const avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg';

class Book extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Card image={ require('../../img/kanada-banf-gory.jpg') } >
        <Text style={book.text}>{item.name}, <Text >{item.author}</Text></Text>
        <Text style={book.range}>{item.range}</Text>
      </Card>
    );
  }
}

export default Book;