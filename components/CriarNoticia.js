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
  ListItem,
  Form,
  Label
} from "native-base";

import axios from "axios";

import HTMLView from "react-native-htmlview";

class CriarNoticia extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  // axios
  //   .post("http://ptua.desenvolvimento/api/likenoticia", {
  //     id_noticia: postid,
  //     user_id: id
  //   })
  //   .then(async response => {

  //     this.setState({});
  //   });

  render() {
    return (
      <Form
        style={{
          height: "20%",
          width: "100%",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
          backgroundColor: "#BDC3C7",
        }}
      >
        <Item inlineLabel>
          <Input 
            placeholder="Criar noticia..."
              ref="TextoNoticia"
          />
        </Item>
        <Button
          info
          style={{
              marginTop: 15,
            marginRight: 15,
            marginLeft: 25
          }}
        >
          <Text>Upload Imagem</Text>
        </Button>
        <Button
          success
          style={{
              marginTop: -45,
            marginBottom: 0,
            marginRight: 15,
            marginLeft: 195
          }}
        >
          <Text>Enviar</Text>
        </Button>
      </Form>
    );
  }
}

export default CriarNoticia;
