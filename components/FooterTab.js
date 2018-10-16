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
            <Icon name="home" />
            <Text>Ínicio</Text>
          </Button>
        ) : (
          <Button vertical onPress={() => props.navigation.navigate("Home")}>
            <Icon name="home" />
            <Text>Ínicio</Text>
          </Button>
        )}
        
         {props.navigation.state.routeName === "PerfilScreen" ? (
      
        <Button vertical active
        onPress={() => props.navigation.navigate("PerfilScreen", {id_user: props.loggedUser})}
        >
          <Icon name="person" />
          <Text>Perfil</Text>
        </Button>
         ) : (
           <Button vertical
        onPress={() => props.navigation.navigate("PerfilScreen", {id_user: props.loggedUser})}
        >
          <Icon name="person" />
          <Text>Perfil</Text>
        </Button>
         )}

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

       {props.navigation.state.routeName === "ChatScreen" ? (
          <Button
            vertical
            active
            onPress={() => props.navigation.navigate("ChatScreen")}
          >
            <Icon name="people" />
            <Text>Chat</Text>
          </Button>
        ) : (
          <Button
            vertical
            onPress={() => props.navigation.navigate("ChatScreen")}
          >
            <Icon name="people" />
            <Text>Chat</Text>
          </Button>
        )}
      </FooterTab>
    </Footer>
  );
};

export default FooterApp;
