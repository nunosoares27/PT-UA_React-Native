import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Home from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import MapScreen from "./components/MapScreen";
import { DrawerNavigator } from "react-navigation";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/reducers";
import ReduxPromise from "redux-promise";

const RouterStack = DrawerNavigator(
  {
    Login: { screen: Login },
    Landing: { screen: Landing },
    Home: { screen: Home },
    Register: { screen: Register },
    MapScreen: { screen: MapScreen }
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {
  render() {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(
      createStore
    );

    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <RouterStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
