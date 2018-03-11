import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';

import Home from '../screens/home/Home';
import Account from '../screens/account/Account';
import BookScreen from '../screens/book/BookScreen';

const StackHome = StackNavigator( { Home: { screen: Home}, Book: { screen: BookScreen } })

const screens = { 
  Home: {
    screen: StackHome,
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

