import React from 'react';
import { Text, View, StatusBar } from 'react-native';
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
    const { navigate } = this.props.navigation;

    return (
      <View style={layout.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <BookList navigate={navigate} />
      </View>
    );
  }
}

export default Home;