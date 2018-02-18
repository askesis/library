import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/home/Home';

const screens = { 
  Home: {
    screen: Home,
  },
}

// в зависимости от роли и наличия токена авторизации добавляются компоненты экранов

const RootStack = StackNavigator({ ...screens });

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

