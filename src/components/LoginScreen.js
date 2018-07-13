import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Button, Tab, Tabs, TabHeading, Icon, Container, Content } from "native-base";
import Logincontainer from "./login/Logincontainer";
import Registrationcontainer from "./login/Registrationcontainer";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      register: false,
      animation: new Animated.Value()
    };
  }

  onChangeTab = index => {
    console.log("====================================");
    console.log(index);
    console.log("====================================");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.maincontainer}>

        <Content

          contentContainerStyle={[styles.container, { paddingBottom: this.keyboardHeight }]}
        >
          <View style={styles.applogo}>
            <Image
              style={{
                width: 75,
                height: 66
              }}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.textstyle}>
            <Text style={styles.boldtext}>Knowledge at hand</Text>
            <Text style={styles.desctext}>
              We’ve made all the medical text books from the world’s leading
              publishers available in one single app, so that doctors always
              and in seconds can get a second opinion from a trusted source.
              </Text>
            <Text style={styles.notamember}>
              Not a member? Register for a free 30 day trial.
              </Text>
          </View>
          <Content contentContainerStyle={styles.logincontainer}  >
            <Tabs onChangeTab={({ i }) => this.onChangeTab(i)}>
              <Tab
                tabStyle={{ backgroundColor: "#6628D8" }}
                heading={
                  <TabHeading style={{ backgroundColor: "#6628D8" }}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Login
                      </Text>
                  </TabHeading>
                }
              >
                <Logincontainer />
              </Tab>
              <Tab
                tabStyle={{ backgroundColor: "#6628D8" }}
                heading={
                  <TabHeading style={{ backgroundColor: "#6628D8" }}>
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Register
                      </Text>
                  </TabHeading>
                }
              >
                <Registrationcontainer />
              </Tab>
            </Tabs>
          </Content>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: 'center',
    height: null,
    width: "100%",
    backgroundColor: "#6628D8"
  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    alignSelf: 'center',
    backgroundColor: "#fff"
  },
  textstyle: {

    alignSelf: 'center'
  },
  applogo: {

    alignContent: "center",
    marginTop: 50
  },
  boldtext: {
    color: "#6628D8",
    marginTop: 37,
    fontSize: 36,
    justifyContent: "center",
    alignSelf: 'center',
  },
  desctext: {
    color: "#868686",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 24,
    marginLeft: 52,
    marginRight: 53
  },
  notamember: {
    color: "#6628D8",
    fontSize: 15.5,
    alignSelf: 'center',
    marginTop: 45
  },

  logincontainer: {
    backgroundColor: "#6628D8",
    flex: 4,
    width: "100%",
    height: null,
    marginTop: 10
  },
  IMAGE_HEIGHT: {
    height: "40%"
  },
  button: {
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 30
  }
});
