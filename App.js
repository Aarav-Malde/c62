import * as React from 'react';
import {View,Text,Button,StyleSheet,Platform,StatusBar} from 'react-native';
import AppHeader from './components/AppHeader';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './Screen.js/HomeScreen';
import SummaryScreen from './Screen.js/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppHeader></AppHeader>
        <AppContainer></AppContainer>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,

});

const AppContainer = createAppContainer(AppNavigator);
