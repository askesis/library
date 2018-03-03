import React from 'react';
import { View, Text } from 'react-native';

import book from '../../stylesheets/app/book/book';

class Book extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={book.items} >
        <Text style={book.itemText}>{item.name}</Text>
        <Text style={book.itemText}>{item.author}</Text>
        <Text style={book.itemText}>{item.range}</Text>
      </View>
    );
  }
}

export default Book;