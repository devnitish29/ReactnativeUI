import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container } from "native-base";
import ExploreScreen from './ExploreScreen';
import SearchScreen from './SearchScreen';
import LastReadScreen from './LastreadScreen';
import MoreScreen from './MoreScreen';
import YourContentScreen from './YourcontentScreen';


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <AppTabNavigator style={styles.tablayout}/>
      </Container>
    );
  }
}

const AppTabNavigator = TabNavigator(
  {
    ExploreScreen: { screen: ExploreScreen },
    SearchScreen: { screen: SearchScreen },
    YourContentScreen: { screen: YourContentScreen },
    LastRead: { screen: LastReadScreen },
    More: { screen: MoreScreen }
  },
  {
    tabBarPosition: 'bottom',
   swipeEnabled: true,
     tabBarOptions: {
     activeTintColor: '#f2f2f2',
     activeBackgroundColor: '#2EC4B6',
     inactiveTintColor: '#666',
     labelStyle: {
       fontSize: 22,
       padding: 12
     }
    }
  }
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  tablayout: {
    height: "90%",
    backgroundColor: "blue"
  },
  playerlayout: {
    height: "10%"
  }
});
