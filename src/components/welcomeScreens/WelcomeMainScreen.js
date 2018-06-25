import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";
import { Button } from "native-base";

class WelcomeMainScreen extends Component {

    static navigationOptions = {
        header: null
      }
    
      constructor(props) {
        super(props);
    
      }


  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={styles.viewpagercontainer}
          indicator={this._renderDotIndicator()}
        >
          <View>
            <FirstScreen />
          </View>
          <View>
            <SecondScreen />
          </View>
          <View>
            <ThirdScreen />
          </View>
        </IndicatorViewPager>
        <Button
          block
          style={styles.button}
          onPress={() => navigate('EXPLORE')}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    viewpagercontainer: {
        height:'90%', width: "100%" 
    },
    button:{
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor:'#6628D8',
        borderColor:'#fff'
    }
});
export default WelcomeMainScreen;
