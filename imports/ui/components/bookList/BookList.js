import React from 'react';
import Book from '../book/Book';
import { View, FlatList } from 'react-native';

import books from './templatebooks';

import layout from '../../stylesheets/app/layout';
import common from '../../stylesheets/app/common';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({item}){ 
    const { navigate } = this.props;

    return <Book id={item.name} item={item} navigate={navigate} /> 
  }
  
  render() {
    return (
      <View style={common.full_width} >
        <FlatList 
          data={books}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default BookList;