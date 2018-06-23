/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import LoginScreen from './src/components/LoginScreen';
import ExploreScreen from './src/components/ExploreScreen';

const RootStack = StackNavigator(
  {
    LOGIN: {
      screen: LoginScreen
    },
    EXPLORE: {
      screen: ExploreScreen
    }
  },
  {
    initialRouteName: 'LOGIN'
  }
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    );
  }
}


