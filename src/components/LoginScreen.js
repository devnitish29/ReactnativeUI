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
import { Button } from "native-base";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View
        style={[styles.container, { paddingBottom: this.keyboardHeight }]}
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
            publishers available in one single app, so that doctors always and
            in seconds can get a second opinion from a trusted source.
          </Text>
          <Text style={styles.notamember}>
            Not a member? Register for a free 30 day trial.
          </Text>
        </View>
        <View style={styles.logincontainer}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              marginTop: 32,
              textAlign: "center"
            }}
          >
            Login
          </Text>
          <View style={{ marginHorizontal: 40, marginTop: 28 }}>
            <TextInput
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                width: null
              }}
              placeholder="Email"
              placeholderTextColor="black"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                width: null,
                marginTop: 28
              }}
              placeholder="Password"
              placeholderTextColor="black"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />

            <Button
              transparent
              block
              style={styles.button}
             // onPress={() => navigate('EXPLORE')}
             onPress={() => navigate('WELCOME')}
            >
              <Text style={{ color: "white" }}>Confirm</Text>
            </Button>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  textstyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  applogo: {
    justifyContent: "flex-start",
    alignContent: "center",
    marginTop: 50
  },
  boldtext: {
    color: "#6628D8",
    marginTop: 37,
    fontSize: 36,
    justifyContent: "center",
    alignItems: "center"
  },
  desctext: {
    color: "#868686",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    marginTop: 24,
    marginLeft: 52,
    marginRight: 53
  },
  notamember: {
    color: "#6628D8",
    fontSize: 15.5,
    marginTop: 45
  },

  logincontainer: {
    backgroundColor: "#6628D8",
    flex: 4,
    flexDirection: "column",
    width: "100%",
    height: null,
    marginTop: 20
  },
  IMAGE_HEIGHT: {
    height: "40%"
  },
  button:{
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 30
}
});
