import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class SignUpScreen extends React.Component{
  static navigationOptions = {
    title: "Sign Up"
  }

  render() {
    //extract navigation functions from this.props.navigation
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("Home")}>
          <Text style={styles.text}>Sign Up Screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  }
});
