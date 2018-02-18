import React from 'react';
import { Text, View } from 'react-native';

import layout from '../../stylesheets/app/layout';

class Home extends React.Component {
  render() {
    return (
      <View style={layout.container}>
        <Text>LIBRARY</Text>
      </View>
    );
  }
}

export default Home;