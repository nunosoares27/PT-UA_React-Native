import React, { Component } from "react";
import { StyleSheet, Image, View, AsyncStorage, CameraRoll, Alert} from "react-native";

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

import { ImagePicker, Permissions } from "expo";

import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import {
  getUserProfile,
} from "./actions";


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
      tempData: "",
      userLogado: '',
      dt: '',
    };
    this.renderFooter = this.renderFooter.bind(this);
  }


  async componentWillMount() {

    if (this.props.navigation.getParam('id_user'))
{
  const dt = await AsyncStorage.getItem("id");
  if(dt){
    this.setState({
      dt
    })
  }
  this.props.getUserProfile(this.props.navigation.getParam('id_user'))
} else { const loggedUser = await AsyncStorage.getItem("id");

    if (loggedUser){
      this.setState({
        userLogado: loggedUser,
      })
      this.props.getUserProfile(loggedUser)
    }

  }
  
  }

  renderFooter(){
   
   if(this.state.userLogado !== ''){
     return(<FooterApp navigation={this.props.navigation} loggedUser={this.state.userLogado} />)
   } else if(this.state.dt !== ''){
    return(<FooterApp navigation={this.props.navigation} loggedUser={this.state.dt} />)
   }
  
     
      
   }
 
  
   askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };


  pickImageHandler = async () => {

  //  const { status } =   await Permissions.askAsync(Permissions.CAMERA_ROLL);


     
    
     await this.askPermissionsAsync();
   
     
  
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
    
     

   
    // if (!result.cancelled) {
    //   this.setState({
    //     pickedImaged: { uri: result.uri }
    //   });
    //  };
    
  };

  UserEdit = async (name, descricaoUser) => {
   // const user_id = await AsyncStorage.getItem("id");
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
    fetch("http://ptua.tk/api/useredit/" + this.props.navigation.getParam('id_user'), {
      method: "post",
      body: formData
    })
      .then(async res => res.json())
      .then(async res => {
        console.log(res);
        //  console.log(response);
   
      });

    this.setState({
      editIsOpen: false,
      pickedImaged: {},
      name: "",
      descricaoUser: ""
    });
  };


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
                      {/* <Text>{this.state.ua}</Text>
                      <Text note>{this.state.ut}</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                   {this.props.user_profile.img == 1 ? ( 
                    <Image
                      source={{
                        uri:
                          "http://ptua.tk/storage/users/" +
                          this.props.user_profile.id +
                          "/imagem1.jpg", cache: 'reload'
                      }}
                      style={{ height: 280, width: null, flex: 1 }}
                    />
                   ) :  (<Image source={require("./images/user_logo1.png")} style={{ height: 280, width: null, flex: 1 }} /> 
                   )} 
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ marginTop: 5 }}>
                      E-mail: {this.props.user_profile.email}
                    </Text>
                    <Text style={{ marginTop: 5, marginBottom: 5 }}>
                      Cargo: {this.props.user_profile.typeUser}
                    </Text>
                    <Text>{this.props.user_profile.descricaoUser}</Text> 
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Text>Noticias</Text>
                  </Left>
                  <Body>
                    <Text>Comentários</Text>
                  </Body>
                  {/*<Right>
                    <Text>4 Dúvidas</Text>
                  </Right>*/}
                </CardItem>
              </Card>
              <Button
                block
                info
                style={{ marginTop: 5 }}
                onPress={() =>
                  this.setState({
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
                          onPress={() =>
                            this.UserEdit(
                              this.state.name,
                              this.state.descricaoUser
                            )}
                        >
                          <Text>Enviar</Text>
                        </Button>
                      </Form>
                    </Body>
                  </CardItem>
                </Card>
              ) : (
                <Text />
              )}

              <Button block danger style={{ marginTop: 2 }}>
                <Text>Apagar conta</Text>
              </Button>
            </Content>
          </Container>
        
        {
          this.renderFooter()
          }
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
    user_profile: state.user_profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getUserProfile },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (PerfilScreen);

