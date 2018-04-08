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

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import {
  fetchNoticias,
  fetchLikes,
} from "./actions";


import axios from "axios";

import HTMLView from "react-native-htmlview";

import { ImagePicker } from "expo";

class CriarNoticia extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      createNews: false,
      titulo: "",
      descricao: ""
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

  cNoticia = async (titulo, descricao) => {
    const user_id = await AsyncStorage.getItem("id");
    const formData = new FormData();
    if (this.state.pickedImaged !== undefined) {
      formData.append("file1", {
        uri: this.state.pickedImaged.uri,
        type: "file", // or photo.type
        name: "file1"
      });
    }
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("user_id", user_id);
    fetch("http://ptua.desenvolvimento/api/criarnoticia", {
      method: "post",
      body: formData
    }).then(res => {
     this.props.fetchNoticias();
     this.props.fetchLikes();
    });

    this.setState({
      createNews: false,
      pickedImaged: {},
      titulo: '',
      descricao: '',
    });

  };

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
          <Input
            placeholder="Titulo..."
            ref="titulo"
            onChangeText={titulo => this.setState({ titulo })}
            value={this.state.titulo}
          />
        </Item>
        <Item inlineLabel>
          <Input
            placeholder="Texto noticia..."
            ref="descricao"
            onChangeText={descricao => this.setState({ descricao })}
            value={this.state.descricao}
          />
        </Item>
        <Button
          info
          style={{
            marginTop: 15,
            marginRight: 15,
            marginLeft: 25
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
          onPress={() => this.cNoticia(this.state.titulo, this.state.descricao)}
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

    return <Container style={{ height: "auto" }}>{CreateN}</Container>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchNoticias, fetchLikes  },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CriarNoticia);

