import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Landing from './components/Landing';
import Register from './components/Register';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Register />
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});