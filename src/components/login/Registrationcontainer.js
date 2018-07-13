//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { Button, CheckBox, Container, Content } from "native-base";
// create a component
class Registrationcontainer extends Component {
    render() {
        return (
            <Container style={styles.logincontainer}>
          
            <Content style={{ marginHorizontal: 40, marginTop: 28 }}>
              <TextInput
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  textAlign:'center',
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
                  textAlign:'center',
                  width: null,
                  marginTop: 28
                }}
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  textAlign:'center',
                  borderRadius: 5,
                  width: null,
                  marginTop: 28
                }}
                placeholder="Confirm password"
                placeholderTextColor="black"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
              />
              <CheckBox checked={true}  style={{ height:20,width:20,marginTop:20,marginBottom:10}}/>
  
              <Button
                transparent
                block
                style={styles.button}
              >
                <Text style={{ color: "white" }}>Register</Text>
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
export default Registrationcontainer;
