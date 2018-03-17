import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import layout from '../../stylesheets/app/layout';
import book from '../../stylesheets/app/book/book';

class BookScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Book',
    tabBarIcon: ( ) => (
      <Icon name="home" size={30} />
    )
  };

  render() {
    const { name, range, description, author} = this.props.navigation.state.params;
    return (
      <View style={layout.container}>
        <ImageBackground style={{ flex: 1 }} imageStyle={{opacity: 0.6}} source={require('../../img/kanada-banf-gory.jpg') }>
          <View style={{ margin: 10}}>
            <Text style={book.name}>{name}</Text>
            <Text style={book.author}>{author}</Text>
            <Text style={book.range}>{range}</Text>
            <Text style={book.descriptionOnImage}>{description}</Text>
          </View>
        </ImageBackground>

      </View>
    );
  }
}

export default BookScreen;