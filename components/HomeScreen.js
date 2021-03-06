import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage, TouchableOpacity, ActivityIndicator } from "react-native";

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
  Title,
  Drawer,
  Item,
  Input,
  List,
} from "native-base";

import SideBar from "./Sidebar";

import HTMLView from "react-native-htmlview";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import {
  fetchNoticias,
  fetchLikes,
  giveLike,
  fetchComentarios,
  comentaNoticia,
  startLoading,
  finishLoading,
} from "./actions";

import ComentarioNoticia from "./ComentarioNoticia";
import FooterApp from "./FooterTab";
import CriarNoticia from "./CriarNoticia";

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
      userLogado: '',
    };
    this.renderFooter = this.renderFooter.bind(this);
  }

renderFooter(){
   
  if(this.state.userLogado !== ''){
    return(<FooterApp navigation={this.props.navigation} loggedUser={this.state.userLogado} />)
  }
 
    
     
  }

  async componentWillMount() {
    this.props.startLoading();
    this.props.fetchNoticias().then(
      () => this.props.finishLoading()
    );
    this.props.fetchLikes();
   
      
    
    const loggedUser = await AsyncStorage.getItem("id");

    if (loggedUser){
      this.setState({
        userLogado: loggedUser,
      })
    }
    

    // axios
    //   .get("http://ptua.desenvolvimento/api/comentarioNoticia/1")
    //   .then(response => {
    //     this.setState({ comenta23: response.data });
    //   })
    //   .catch(function(error) {
    //     alert(error);
    //   });
  }

  ComponentDidMount(){
    this.setState({
      loading: false,
    })
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
    this.props.startLoading()
    this.props.giveLike({
      id_noticia: postid,
      user_id: id
    }).then( ()=> this.props.finishLoading() );

  

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
    })
  };

  obtemComentario = async id_noticia => {
    this.setState({
      ComentarioHidden: !this.state.ComentarioHidden
    });
    this.props.fetchComentarios({
      id_noticia: id_noticia
    })
  };
  
  render() {
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']


    //  const Comentarios =

    //  <ComentarioNoticia chave={noticia.id_noticia} comenta23={this.props.comentarios} />

    //  ;

    const Noticias = this.props.noticias.map((noticia,i) => (
      <Card key={noticia.id_noticia}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("PerfilScreen", {id_user: noticia.user_id})} >
        <CardItem >
          <Left >
            <Thumbnail 
            source={{
                        uri: 
                        "http://ptua.tk/storage/users/" +
                          noticia.user_id +
                          "/imagem1.jpg", cache: 'reload'
                      }}
                   />
            <Body>
              <Text>{noticia.name}</Text>
              <Text note>{noticia.typeUser}</Text>
            </Body>
          </Left>
        </CardItem>
      </TouchableOpacity>
        <CardItem>
          <Text style={styles.NT}>{noticia.titulo}</Text>
        </CardItem>

        {noticia.noticiaHasImagem1 ? (
          <CardItem>
            <Image
              source={{
                uri: `http://ptua.tk/storage/noticias/${noticia.id_noticia}/imagem1.jpg`
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
                uri: `http://ptua.tk/storage/noticias/${noticia.id_noticia}/imagem2.jpg`
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
             
                {this.props.likes[i] + " Likes"}
            
            </Text>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text
                onPress={() => this.obtemComentario(noticia.id_noticia)}
                style={{ paddingLeft: 5 }}
              >
                comentários
              </Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>

        <Content scrollEnabled={false}>
          <List
            style={{
              marginBottom: 15,
              marginLeft: 15,
              marginRight: 15,
              backgroundColor: "white"
            }}
          />
        {/* </Content>
     
        <Content> */}

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
            autoCorrect={true}
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
              marginRight: 15,
            }}
            onPress={() => {
              this.comenta(noticia.id_noticia, this.state.TextoComentario);
              this.setState({ TextoComentario: "", });
              }
            }
          >
            <Text> Enviar </Text>
          </Button>
        </Content>
        
       
          <ComentarioNoticia
            chave={noticia.id_noticia}
            comenta23={this.props.comentarios}
          />
          
          
          
       
      </Card>
    ));

    
    
    return (

      <View style={{ flex: 1, width: "100%" }}>
      {console.log(this.props.loading)}
         { this.props.loading === true ?  ( <ActivityIndicator style={styles.indicator} size="large" /> )
        : (
          <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={
            <SideBar
              navigator={this.navigator}
              navigation={this.props.navigation}
            />
          }
          onClose={() => this.closeDrawer()}
          style={{ width: "100%" }}
        >
          <Header>
            <Left>
              <Button transparent onPress={() =>  this.openDrawer() }  >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Comunidade</Title>
            </Body>
            <Right>
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
            <Content>
              <CriarNoticia />
          
              {Noticias}
            </Content>
          </Container>

          {this.renderFooter()}
        
         
        </Drawer>

        ) }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  NT: {
    fontWeight: "800",
    fontSize: 25
  }, 
    indicator: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

function mapStateToProps(state) {
  return {
    comentarios: state.comentarios,
    noticias: state.noticias,
    likes: state.likes,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchNoticias, fetchLikes, giveLike, fetchComentarios, comentaNoticia, startLoading, finishLoading },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
