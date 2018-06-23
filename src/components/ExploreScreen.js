import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import {
  Container, Icon,
  Header, Content, Footer,
  FooterTab, Button, Text,
  View, Left, Right, Body, Title,
  H1, H2, H3, Form, Item, Input, Label,
  List, ListItem, Spinner, Fab
} from 'native-base';
const items = [
  {
    id: 1, header: "Sports", show: true, list: [{ id: 1, title: "Cricket", name: "Sports" },
    { id: 2, title: "Cricket", name: "Health" },
    { id: 3, title: "Cricket", name: "Education" },
    { id: 4, title: "Cricket", name: "Travel" },
    { id: 5, title: "Cricket", name: "Real-Estate" },
    { id: 6, title: "Cricket", name: "Technology" }]
  },
  {
    id: 2, header: "Sports", show: true, list: [{ id: 1, title: "Cricket", name: "Sports" },
    { id: 2, title: "Cricket", name: "Health" },
    { id: 3, title: "Cricket", name: "Education" },
    { id: 4, title: "Cricket", name: "Travel" },
    { id: 5, title: "Cricket", name: "Real-Estate" },
    { id: 6, title: "Cricket", name: "Technology" }]
  },
  {
    id: 3, header: "Sports", show: true, list: [{ id: 1, title: "Cricket", name: "Sports" },
    { id: 2, title: "Cricket", name: "Health" },
    { id: 3, title: "Cricket", name: "Education" },
    { id: 4, title: "Cricket", name: "Travel" },
    { id: 5, title: "Cricket", name: "Real-Estate" },
    { id: 6, title: "Cricket", name: "Technology" }]
  },
];

export default class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }

  toggle(val, index) {
    if (val == 'hide') {
      this.state.items[index].show = false;
      this.setState({
        items: this.state.items
      })
    } else {
      this.state.items[index].show = true;
      this.setState({
        items: this.state.items
      })
    }
  }
  render() {
    return (


      <Container style={styles.container}>
        <Header androidStatusBarColor="#05bCA0" style={{ backgroundColor: '#05bCA0' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Explore</Title>
          </Body>
        </Header>
        <Content>
          <View style={{ flexDirection: 'column' }}>
            {this.state.items.map((item, index) =>
              <View>
                <View style={styles.sectionHeader}>
                  <Text style={{ alignSelf: 'flex-start' }}>{this.state.items[index].header}</Text>
                  {this.state.items[index].show ? (
                    <Icon name='angle-down' type="FontAwesome" color='#000' alignSelf='flex-end' onPress={() => this.toggle('hide', index)} />) :
                    <Icon name='angle-up' type="FontAwesome" color='#000' alignSelf='flex-end' onPress={() => this.toggle('show', index)} />}
                </View>
                <View style={styles.sectionContent}>
                  {this.state.items[index].show ? (
                    <ScrollView horizontal>
                      {item.list.map((list) =>
                        <View style={styles.sectionBody}>
                          <View style={styles.imageBody}>

                          </View>
                          <Text>{list.name}</Text>
                          <Text>{list.title}</Text>
                        </View>
                      )}
                    </ScrollView>) : null}
                </View>
              </View>
            )}
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  sectionHeader: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#DAF5F1'
  },
  sectionContent: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingRight: 30
  },
  sectionBody: {
    height: 300,
    width: 200,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 30,
    paddingBottom: 30
  },
  imageBody: {
    height: 200,
    backgroundColor: '#ddd',
    marginBottom: 15
  }
});
