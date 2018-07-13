//import liraries
import React, { Component } from 'react';
import {  Text, StyleSheet,TextInput } from 'react-native';
import { Button ,Container,Content} from "native-base";
// create a component
class Logincontainer extends Component {
    render() {
        return (
            <Container style={styles.logincontainer}>
        
          <Content style={{ marginHorizontal: 40, marginTop: 28 }}>
            <TextInput
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                textAlign:'center',
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
                textAlign:'center',
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
            >
              <Text style={{ color: "white" }}>Confirm</Text>
            </Button>
          </Content>
        </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    logincontainer: {
        backgroundColor: "#6628D8",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      },
      button:{
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 25,
        marginBottom: 30
    }
});

//make this component available to the app
export default Logincontainer;
