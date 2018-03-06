import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class HomeScreen extends React.Component{
  static navigationOptions = {
    title: "Home"
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  }
});
