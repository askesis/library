import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

import book from '../../stylesheets/app/book/book';

const avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg';

class Book extends React.Component {

  constructor(props) {
    super(props);
    
    this.onClickCard = this.onClickCard.bind(this);
    this.pushPage = this.pushPage.bind(this);
  }

  pushPage(){
    this.props.navigate('Book');
  }

  onClickCard(){
    this.pushPage();
  }
  
  render() {
    const { item } = this.props;

    return ( 
      <View>
        <TouchableOpacity activeOpacity={ .7 } onPress={this.onClickCard} >
          <Card image={ require('../../img/kanada-banf-gory.jpg') } >
            <Text style={book.text}>{item.name}, <Text>{item.author}</Text></Text>
            <Text style={book.range}>{item.range}</Text>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Book;