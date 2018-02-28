import React from 'react';
import { Text, View } from 'react-native';

import layout from '../../stylesheets/app/layout';

class Account extends React.Component {

  static navigationOptions = {
    title: 'Account',
  };

  render() {
    return (
      <View style={layout.container}>
        <Text>Account</Text>
      </View>
    );
  }
}

export default Account;