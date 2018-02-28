import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../screens/home/Home';
import Account from '../screens/account/Account';

const screens = { 
  Home: {
    screen: Home,
  },
  Account: {
    screen: Account,
  }
}

const settings = {
  tabBarPosition: 'bottom',
}

// в зависимости от роли и наличия токена авторизации добавляются компоненты экранов

const RootStack = TabNavigator( screens, settings );

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

