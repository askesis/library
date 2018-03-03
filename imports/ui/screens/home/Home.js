import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import layout from '../../stylesheets/app/layout';
import BookList from '../../components/bookList/BookList';

class Home extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ( ) => (
      <Icon name="home" size={30} />
    )
  };

  render() {
    return (
      <View style={layout.container}>
        <BookList />
      </View>
    );
  }
}

export default Home;