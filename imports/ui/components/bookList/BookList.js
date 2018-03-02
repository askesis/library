import React from 'react';
import Book from '../book/Book';
import { View } from 'react-native';

class BookList extends React.Component {
  render() {
    return (
      <View><Book/></View>
    );
  }
}

export default BookList;