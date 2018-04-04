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

import SideBar from "./Sidebar";

import axios from "axios";

import HTMLView from "react-native-htmlview";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import {
  fetchNoticias,
  fetchLikes,
  giveLike,
  fetchComentarios,
  comentaNoticia
} from "./actions";

import ComentarioNoticia from './ComentarioNoticia';
import FooterApp from './FooterTab';

class HomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      noticias: [],
      TextoComentario: "",
      ComentarioHidden: true,
      comenta23: [],
      chave: [],
    };
  }

  componentWillMount() {
    this.props.fetchNoticias();
    this.props.fetchLikes();
    
    // axios
    //   .get("http://ptua.desenvolvimento/api/comentarioNoticia/1")
    //   .then(response => {
    //     this.setState({ comenta23: response.data });
    //   })
    //   .catch(function(error) {
    //     alert(error);
    //   });

  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  uname = async postid => {
    const ua = await AsyncStorage.getItem("username");
    const ue = await AsyncStorage.getItem("useremail");
    const ut = await AsyncStorage.getItem("userType");
    const id = await AsyncStorage.getItem("id");

    // console.log("event: "+postid);
    //  alert("Dados do User: "+ua+", "+ue+", "+ ut+", "+id);

    // 'id_noticia', 'user_id',

    this.props.giveLike({
      id_noticia: postid,
      user_id: id
    });

    // axios
    //   .post("http://ptua.desenvolvimento/api/likenoticia", {
    //     id_noticia: postid,
    //     user_id: id
    //   })
    //   .then(async response => {

    //     this.setState({});
    //   });
  };

  comenta = async (id_noticia, TextoComentario) => {
    const user_id = await AsyncStorage.getItem("id");

    this.props.comentaNoticia({
      id_noticia: id_noticia,
      user_id: user_id,
      TextoComentario: TextoComentario
    });
  };

  
  obtemComentario = async (id_noticia) => {
    
    this.setState({
      ComentarioHidden: !this.state.ComentarioHidden,
    });

    this.props.fetchComentarios({
        id_noticia: id_noticia,
    });

    

  };



  render() {
    

  //  const Comentarios = 
  
      


      //  <ComentarioNoticia chave={noticia.id_noticia} comenta23={this.props.comentarios} />



  

  //  ;
  
      
    const Noticias = this.props.noticias.map(noticia => (

       

      <Card key={noticia.id_noticia}>
        
        <CardItem>
          <Left>
            <Thumbnail source={require("./images/user_logo1.png")} />
            <Body>
              <Text>{noticia.name}</Text>
              <Text note>{noticia.typeUser}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Text style={styles.NT}>{noticia.titulo}</Text>
        </CardItem>

        {noticia.noticiaHasImagem1 ? (
          <CardItem>
            <Image
              source={{
                uri: `http://ptua.desenvolvimento/storage/noticias/${noticia.id_noticia}/imagem1.jpg`
              }}
              style={{ resizeMode: "cover", height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        ) : (
          <Text />
        )}

        <CardItem>
          <Body>
            <HTMLView value={noticia.descricao} />
          </Body>
        </CardItem>

        {noticia.noticiaHasImagem2 ? (
          <CardItem>
            <Image
              source={{
                uri: `http://ptua.desenvolvimento/storage/noticias/${noticia.id_noticia}/imagem2.jpg`
              }}
              style={{ resizeMode: "cover", height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        ) : (
          <Text />
        )}

        <CardItem>
          <Left>
            <Button transparent onPress={() => this.uname(noticia.id_noticia)}>
              <Icon active name="thumbs-up" />
            </Button>

            <Text>
              {this.props.likes["" + noticia.id_noticia + ""] === "1" ? (
                this.props.likes["" + noticia.id_noticia + ""] + " Like"
              ) : (
                this.props.likes["" + noticia.id_noticia + ""] + " Likes"
              )}
            </Text>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text 
               onPress={() =>
              this.obtemComentario(noticia.id_noticia)}
          style={{ paddingLeft: 5 }}
              >4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
       
        <Content>
          <List
            style={{
              marginBottom: 15,
              marginLeft: 15,
              marginRight: 15,
              backgroundColor: "white"
            }}
          >
            


          </List>
        </Content>
        <Content>
          <Item
            rounded
            style={{
              marginBottom: 15,
              marginLeft: 15,
              marginRight: 15,
              backgroundColor: "#BDC3C7"
            }}
          >
            <Input
              placeholder="Escrever comentário"
              ref="TextoComentario"
              onChangeText={TextoComentario =>
                this.setState({ TextoComentario })}
              value={this.state.TextoComentario}
            />
          </Item>
          <Button
            success
            style={{
              marginBottom: 15,
              marginLeft: 20,
              marginRight: 15
            }}
            onPress={() =>
              this.comenta(noticia.id_noticia, this.state.TextoComentario)}
          >
            <Text> Enviar </Text>
          </Button>

           <ComentarioNoticia chave={noticia.id_noticia} comenta23={this.props.comentarios} />

            {/*{Comentarios}*/}
        </Content>
       
      </Card>
    )); 

    return (
      <View style={{ flex: 1, width: "100%" }}>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator}  navigation={this.props.navigation} />}
          onClose={() => this.closeDrawer()}
          style={{ width: "100%" }}
         
        >
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Notícias</Title>
            </Body>
            <Right>
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
            <Content>{Noticias}</Content>
          </Container>

          <FooterApp navigation={this.props.navigation} />

        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NT: {
    fontWeight: "800",
    fontSize: 25
  }
});

function mapStateToProps(state) {
  return {
    comentarios: state.comentarios,
    noticias: state.noticias,
    likes: state.likes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchNoticias, fetchLikes, giveLike, fetchComentarios, comentaNoticia },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
