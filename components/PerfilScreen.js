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
  Form
} from "native-base";

import SideBar from "./Sidebar";

import axios from "axios";

import HTMLView from "react-native-htmlview";


import { ImagePicker } from "expo";

// import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
// import {
//   fetchNoticias,
//   fetchLikes,
//   giveLike,
//   fetchComentarios,
//   comentaNoticia
// } from "./actions";

// import ComentarioNoticia from './ComentarioNoticia';
import FooterApp from "./FooterTab";

class PerfilScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      ua: "",
      ue: "",
      ut: "",
      id: "",
      editIsOpen: false,
      name: "",
      descricaoUser: "",
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

  UserEdit = async (name, descricaoUser) => {
    const user_id = await AsyncStorage.getItem("id");
    const formData = new FormData();
    if (this.state.pickedImaged !== undefined) {
      formData.append("file1", {
        uri: this.state.pickedImaged.uri,
        type: "file", // or photo.type
        name: "file1"
      });
    }
    formData.append("name", name);
    formData.append("descricaoUser", descricaoUser);
  
 //  console.log(formData);
    fetch("http://ptua.desenvolvimento/api/useredit/"+user_id, {
      method: "post",
      body: formData
    }).then(async response => {
         
           console.log("resposta"+response);
          //   await AsyncStorage.setItem('username', response.name);
          //   await AsyncStorage.setItem('userimg', response.img.toString());
          //   await AsyncStorage.setItem('descricaoUser', response.descricaoUser);

  //   this.props.navigation.navigate('PerfilScreen');
    });

    this.setState({
      createNews: false,
      pickedImaged: {},
      name: '',
      descricaoUser: '',
    });

  };

  async componentWillMount() {
    // axios
    //   .get("http://ptua.desenvolvimento/api/comentarioNoticia/1")
    //   .then(response => {
    //     this.setState({ comenta23: response.data });
    //   })
    //   .catch(function(error) {
    //     alert(error);
    //   });

    const ua = await AsyncStorage.getItem("username");
    const ue = await AsyncStorage.getItem("useremail");
    const ut = await AsyncStorage.getItem("userType");
    const id = await AsyncStorage.getItem("id");
    const img = await AsyncStorage.getItem("userimg");
    const du = await AsyncStorage.getItem("descricaoUser");

    if (ua && ue && ut && id && img && du) {
      this.setState({
        ua,
        ue,
        ut,
        id,
        img,
        du,
        name: ua,
        descricaoUser: du
      });
     
    } else {
      alert("esperando");
    }

    //   uname = async () => {
    //       try {
    //    const ua = await AsyncStorage.getItem("username");
    //     const ue = await AsyncStorage.getItem("useremail");
    //     const ut = await AsyncStorage.getItem("userType");
    //     const id = await AsyncStorage.getItem("id");
    //   if ( !== null){

    //    alert('funcionou');
    //   }
    // } catch (error) {
    //   alert('deu merda');
    // }
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  //   uname = async postid => {
  //     const ua = await AsyncStorage.getItem("username");
  //     const ue = await AsyncStorage.getItem("useremail");
  //     const ut = await AsyncStorage.getItem("userType");
  //     const id = await AsyncStorage.getItem("id");

  //   };

  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
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
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Perfil</Title>
            </Body>
            <Right>
              <Button transparent>{/*<Icon name='arrow-back' />*/}</Button>
            </Right>
          </Header>

          <Container>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{this.state.ua}</Text>
                      <Text note>{this.state.ut}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  {this.state.img == 1 ? <Image
                    source={{
                      uri:
                    "http://ptua.desenvolvimento/storage/users/"+ this.state.id + "/imagem1.jpg"
                    
                    }}
                    style={{ height: 280, width: null, flex: 1 }}
                  />  : 
                  <Image
                    source={{
                      uri:
                      "https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/16730145_661435734066944_2259181377204724691_n.jpg?_nc_cat=0&oh=33a7b9814af346c739bbe89d8be58669&oe=5B6AF379"
                      
                   
                    }}
                    style={{ height: 280, width: null, flex: 1 }}
                  />
                  }
                  
                </CardItem>
                <CardItem>
                  <Body>
                     <Text style={{ marginTop: 5 }}>
                      E-mail: {this.state.ue}
                    </Text>
                    <Text style={{ marginTop: 5, marginBottom: 5 }}>Cargo: {this.state.ut}</Text>
                    <Text>
                      {this.state.du}
                    </Text>
                   
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text>12 Noticias</Text>
                  </Left>
                  <Body>
                    <Text>4 Comentários</Text>
                  </Body>
                  {/*<Right>
                    <Text>4 Dúvidas</Text>
                  </Right>*/}
                </CardItem>
              </Card>
              <Button block info style={{ marginTop: 5 }}
              onPress={ () => this.setState({
                editIsOpen: !this.state.editIsOpen
              })}
              >
                <Text>Mudar dados</Text>
              </Button>
             {this.state.editIsOpen ? (
              <Card>
                <CardItem>
                  <Body>
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
                      <Item inlineLabel>
                        <Input
                          placeholder="Nome..."
                          ref="name"
                          onChangeText={name => this.setState({ name })}
                          value={this.state.name}
                        />
                      </Item>

                      <Item inlineLabel>
                        <Input
                          placeholder="Descrição..."
                          ref="descricaoUser"
                          onChangeText={descricaoUser =>
                            this.setState({ descricaoUser })}
                          value={this.state.descricaoUser}
                        />
                      </Item>

                      <Button
                        block
                        info
                        style={{
                          marginTop: 15,
                          marginRight: 15,
                          marginLeft: 25
                        }}
                         onPress={this.pickImageHandler}
                      >
                        <Text>Mudar Imagem Perfil</Text>
                      </Button>

                      <Button
                        danger
                        style={{
                          marginTop: 45,
                          marginLeft: 75
                        }}
                        //   onPress={() => this.cNoticia(this.state.titulo, this.state.descricao)}
                      >
                        <Text>cancelar</Text>
                      </Button>
                      <Button
                        success
                        style={{
                          marginTop: -45,
                          marginLeft: 185
                        }}
                        onPress={() => this.UserEdit(this.state.name, this.state.descricaoUser)}
                      >
                        <Text>Enviar</Text>
                      </Button>
                    </Form>
                  </Body>
                </CardItem>
              </Card>
             ) : <Text></Text> }
              
              
              <Button block danger style={{ marginTop: 2 }}>
                <Text>Apagar conta</Text>
              </Button>
            </Content>
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

export default PerfilScreen;

// function mapStateToProps(state) {
//   return {
//     comentarios: state.comentarios,
//     noticias: state.noticias,
//     likes: state.likes
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { fetchNoticias, fetchLikes, giveLike, fetchComentarios, comentaNoticia },
//     dispatch
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
