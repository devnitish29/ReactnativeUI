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
import WelcomeMainScreen from './src/components/welcomeScreens/WelcomeMainScreen';
import FirstScreen from './src/components/welcomeScreens/FirstScreen';
import SecondScreen from './src/components/welcomeScreens/SecondScreen';
import ThirdScreen from './src/components/welcomeScreens/ThirdScreen';

const RootStack = StackNavigator(
  {
    LOGIN: {
      screen: LoginScreen
    },
    EXPLORE: {
      screen: ExploreScreen
    },
    WELCOME:{
      screen: WelcomeMainScreen
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

      // <WelcomeMainScreen />
    );
  }
}


