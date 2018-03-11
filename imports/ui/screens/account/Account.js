import React from 'react';
import { Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import layout from '../../stylesheets/app/layout';

class Account extends React.Component {

  static navigationOptions = {
    title: 'Account',
    tabBarIcon: ( ) => (
      <Icon name="edit" size={30} />
    )
  };

  render() {
    return (
      <View style={layout.container}>
        <Text onPress={()=>console.log('press')} >Account</Text>
        <Button title="press" onPress={()=>console.log('press')} />
      </View>
    );
  }
}

export default Account;