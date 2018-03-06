import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class SettingsScreen extends React.Component{
  static navigationOptions = {
    title: "Settings"
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Settings</Text>
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
