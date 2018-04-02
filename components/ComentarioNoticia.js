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

const ComentarioNoticia = props => {
  return (
    console.log("comentario" + props.comenta23),
    props.comenta23.map(comentario => (
      <ListItem key={comentario.id_comentario}>
        <Thumbnail
          square
          size={80}
          source={require("./images/user_logo1.png")}
        />
        <Body>
          <Text>{comentario.name}</Text>
          <Text note>{comentario.TextoComentario}</Text>
        </Body>
      </ListItem>
    ))
  );
};

export default ComentarioNoticia;

/*<ListItem>
        <Thumbnail
          square
          size={80}
          source={require("./images/user_logo1.png")}
        />
        <Body>
          <Text>{props.comenta23[1] !== undefined ? props.comenta23[1]["id_noticia"] == "1" 
            ? props.comenta23[1]["name"] : ""
            
            : "Sankhadeep" }</Text>
          <Text note>
           {props.comenta23[1] !== undefined ? props.comenta23[1]["TextoComentario"] : ""}
          </Text>
        </Body>
      </ListItem>*/
