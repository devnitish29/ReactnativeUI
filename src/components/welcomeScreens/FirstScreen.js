import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Content } from "native-base";

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.minicontainer}
        />
        <View
          style={styles.textcontainer}
        >
          <Text
            style={styles.headertext}
          >
            Welcome
          </Text>
          <Text
            style={styles.descriptiontext
          }
          >
            Need a second opinion? Get it from a source you can trust. You now
            have 500 medical textbooks from the world's leading publishers at
            your fingertips.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{flex:1,flexDirection:'column'},
  minicontainer:{
    width: "100%",
    height: "60%",
    backgroundColor: "#6628d8"
  },
  textcontainer:{
    flex: 2,
    flexDirection: "column"
  },
  headertext:{
    color: "#6628d8",
    fontSize: 30.0,
    alignSelf: "center",
    marginTop: 30.0
  },
  descriptiontext:{

    fontSize: 16.0,
    alignItems: "center",
    textAlign: "center",
    marginTop: 30.0,
    marginHorizontal: 20.0
  }

});

export default FirstScreen;
