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
    props.comenta23.map(comentario => (
      comentario.id_noticia == props.chave ?  
      <ListItem key={comentario.id_comentario}>
        <Thumbnail
          square
          size={80}
          source= {{
            uri: 
            "http://ptua.tk/storage/users/" +
              comentario.user_id +
              "/imagem1.jpg", cache: 'reload'
          }}
        />
        <Body>
          <Text>{comentario.name}</Text>
          <Text note>{comentario.TextoComentario}</Text>
        </Body>
      </ListItem>
      :
      <Text key={comentario.id_comentario}></Text>
    ))
  );
};

export default ComentarioNoticia;
