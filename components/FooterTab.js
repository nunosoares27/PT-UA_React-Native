import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage } from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
  Title,
  Drawer,
  Item,
  Input,
  List,
  ListItem
} from "native-base";

const FooterApp = props => {
  return (
    <Footer>
      <FooterTab>
        {props.navigation.state.routeName === "Home" ? (
          <Button
            vertical
            active
            onPress={() => props.navigation.navigate("Home")}
          >
            <Icon name="camera" />
            <Text>Notícias</Text>
          </Button>
        ) : (
          <Button vertical onPress={() => props.navigation.navigate("Home")}>
            <Icon name="camera" />
            <Text>Notícias</Text>
          </Button>
        )}

        <Button vertical>
          <Icon name="apps" />
          <Text>Dúvidas</Text>
        </Button>

        {props.navigation.state.routeName === "MapScreen" ? (
          <Button
            vertical
            active
            onPress={() => props.navigation.navigate("MapScreen")}
          >
            <Icon name="navigate" />
            <Text>Mapa</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.navigation.navigate("MapScreen")}
          >
            <Icon name="navigate" />
            <Text>Mapa</Text>
          </Button>
        )}

        <Button vertical>
          <Icon name="person" />
          <Text>Chat</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterApp;
