import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';
import Home from './components/HomeScreen';
import Sidebar from './components/Sidebar';
import MapScreen from './components/MapScreen';
import {
  DrawerNavigator,
} from 'react-navigation';

const RouterStack =  DrawerNavigator({
  Login: { screen: Login },
  Landing: {screen: Landing},
  Home: { screen: Home},
  Register: {screen: Register},
  MapScreen: {screen: MapScreen}
},
 {
    initialRouteName: 'Landing',
  }
);

export default class App extends React.Component {

  render() {

    return (
     
        <RouterStack />
          

    );
  }
}


const styles = StyleSheet.create({

});