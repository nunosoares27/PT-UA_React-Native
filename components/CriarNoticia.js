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

import { ImagePicker } from "expo";

class CriarNoticia extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      pickedImaged: null,
      createNews: false
    };
  }

  pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);
    if (!result.cancelled) {
      this.setState({
        pickedImaged: { uri: result.uri }
      });
    }
  };

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
    const CreateN = this.state.createNews ? (
      <Form
        style={{
          height: "100%",
          width: "100%",
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 15,
          paddingBottom: 0,
          backgroundColor: "#ecf0f1"
        }}
      >
        <Button
          block
          light
          contentContainerStyle={{ justifyContent: "center", flex: 1 }}
          onPress={() =>
            this.setState({
              createNews: !this.state.createNews,
              pickedImaged: null
            })}
        >
          <Text>Cancelar</Text>
        </Button>

        {this.state.pickedImaged && (
          <Image
            source={{ uri: this.state.pickedImaged.uri }}
            style={{ width: "100%", height: 200 }}
          />
        )}
        <Item inlineLabel>
          <Input placeholder="Criar noticia..." ref="TextoNoticia" />
        </Item>
        <Button
          info
          style={{
            marginTop: 15,
            marginRight: 15,
            marginLeft: 25,
          }}
          onPress={this.pickImageHandler}
        >
          <Text>Upload Imagem</Text>
        </Button>
        <Button
          success
          style={{
            marginTop: -45,
            marginRight: 15,
            marginLeft: 195
          }}
        >
          <Text>Enviar</Text>
        </Button>
      </Form>
    ) : (
      <Button
        block
        light
        contentContainerStyle={{ justifyContent: "center", flex: 1 }}
        onPress={() =>
          this.setState({
            createNews: !this.state.createNews
          })}
      >
        <Text>Criar Noticia</Text>
      </Button>
    );

    return <Container style={{ height: "auto" }}>
        {CreateN}
        </Container>;
  }
}

export default CriarNoticia;
