import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import firebase from 'react-native-firebase';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Sign In"
  }


  render() {
    const {navigate} = this.props.navigation
    return (<View style={styles.container}>
      <Text style={styles.text}>Sign In Screen</Text>
      <Button title="Sign Up" onPress={() => navigate("SignUp")}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  }
});
