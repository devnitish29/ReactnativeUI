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
import ExploreScreen from './src/components/homeScreens/ExploreScreen';
import WelcomeMainScreen from './src/components/welcomeScreens/WelcomeMainScreen';
import HomeScreen from './src/components/homeScreens/HomeScreen';
import Logincontainer from './src/components/login/Logincontainer';
import Registrationcontainer from './src/components/login/Registrationcontainer';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';



const RootStack = StackNavigator(
  {
    LOGIN: {
      screen: LoginScreen
    },
    EXPLORE: {
      screen: ExploreScreen
    },
    HOME: {
      screen: HomeScreen
    },
    WELCOME: {
      screen: WelcomeMainScreen
    }
  },
  {
    initialRouteName: 'LOGIN'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default class App extends Component {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
      // <Router>
      //   <Stack hideNavBar
      //     key="root"
      //   >
      //   <Scene key="launch" component={LoginScreen}    initial/>
      //   <Tabs key="tabbar"
      //             swipeEnabled
      //             showLabel={false}
      //             tabBarStyle={styles.tabBarStyle}>

      //             <Scene key="login"
      //                 component={Logincontainer}
      //                 tabBarLabel="Login"/>
      //             <Scene key="register"
      //                 component={Registrationcontainer}
      //                 tabBarLabel="Register"/>
      //   </Tabs>
      //   </Stack>
      // </Router>

    );
  }
}


