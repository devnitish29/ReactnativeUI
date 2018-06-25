import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ThirdScreen extends Component {
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
            Your content
          </Text>
          <Text
            style={styles.descriptiontext}
          >
            All your downloaded books, favorite chapters and notes stored in one
            place.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  minicontainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#6628d8"
  },
  textcontainer: {
    flex: 2,
    flexDirection: "column"
  },
  headertext: {
    color: "#6628d8",
    fontSize: 30.0,
    alignSelf: "center",
    marginTop: 30.0
  },
  descriptiontext: {
    fontSize: 16.0,
    alignItems: "center",
    textAlign: "center",
    marginTop: 30.0,
    marginHorizontal: 20.0
  }
});

export default ThirdScreen;
