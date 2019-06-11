import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import FormScreen from './FormScreen.js';
import HomeScreen from './HomeScreen.js';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Form: {
      screen: FormScreen,
    },
  },
  {
    initialRouteName: "Home",
	headerMode: 'none',
  }
);
export default createAppContainer(AppNavigator);