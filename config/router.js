import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import Home from '../screens/HomeScreen';
import Settings from '../screens/SettingsScreen';
import SignIn from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';

export const SignedIn = TabNavigator({
  Home: {
    screen: Home
  },
  Setting: {
    screen: Settings
  }
});

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});
