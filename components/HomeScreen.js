import React, {Component} from 'react';
import { StyleSheet, Image, View 
 } from 'react-native';

 import { Container, Header, Content, Card, CardItem, Thumbnail, 
   Text, Button, Icon, Left, Body, Right, Footer, FooterTab, Title, Drawer } from 'native-base';

import SideBar from './Sidebar';

import axios from 'axios';

import HTMLView from 'react-native-htmlview';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null }
  
  constructor(props) {
    super(props);

    this.state = {
      noticias: [],
      
    };

  }

  componentWillMount() {
      axios.get('http://ptua.desenvolvimento/api/noticias')
        .then(response => {
          this.setState({ noticias: response.data});
        } )
        .catch(function (error) {
          alert(error);
        });

  }


 closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

  render() {

     const Noticias = this.state.noticias.map((noticia) =>
      <Card key={noticia.id_noticia}>
            <CardItem>
              <Left>
                <Thumbnail source={require ('./images/user_logo1.png')} />
                <Body>
                  <Text>{noticia.name}</Text>
                  <Text note>{noticia.titulo}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
               {/*<Image source={require( './images/post1.png')} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>*/}
                <Image source={{uri: `http://ptua.desenvolvimento/storage/noticias/${noticia.id_noticia}/imagem1.jpg`}} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>
              </CardItem>
            <CardItem >
              <Body>
               
             
                  
                   <HTMLView
        value={noticia.descricao}
        
      />


                
                </Body>

                
            </CardItem>
            <CardItem>
                 <Image source={{uri: `http://ptua.desenvolvimento/storage/noticias/${noticia.id_noticia}/imagem2.jpg`}} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>

            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style={{paddingLeft: 5}}>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
  );
    
    
    return (

      <View style={{ flex: 1, width: '100%'}}>

 <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} 
        style={{width: '100%'}}
        >

         <Header>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Notícias</Title>
          </Body>
          <Right>
            <Button transparent >
              {/*<Icon name='arrow-back' />*/}
            </Button>
          </Right>
        </Header>



<Container >
        <Content >

        {Noticias}

          {/*<Card>
            <CardItem>
              <Left>
                <Thumbnail source={require ('./images/user_logo1.png')} />
                <Body>
                  <Text>Nuno Soares</Text>
                  <Text note>O poder do React Native</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
               <Image source={require( './images/post1.png')} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>
              </CardItem>
            <CardItem >
              <Body>
               
              <Text>
                  blafsadlmksadklsamdklasmdklasmkldsamkdlkmasdmklasdmlkaslkdasmkdas
                  sakdmakdamlsdmlakdmklsamdklsamdklasmdkasmdklasdmkaldmaklsdmkasdmklas
                  kamsdlkadmklsadmlkamdkaldmalksdmaldkasmkdlamskdlsamkdmaklsdlka
                </Text>
                </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style={{paddingLeft: 5}}>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>*/}


  {/*<Card>
            <CardItem>
              <Left>
                <Thumbnail source={require ('./images/user_logo1.png')} />
                <Body>
                  <Text>Nuno Soares</Text>
                  <Text note>O poder do React Native</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
               <Image source={require( './images/post1.png')} style={{resizeMode: 'cover',height: 200, width: null, flex: 1}}/>
              </CardItem>
            <CardItem >
              <Body>
               
              <Text>
                  blafsadlmksadklsamdklasmdklasmkldsamkdlkmasdmklasdmlkaslkdasmkdas
                  sakdmakdamlsdmlakdmklsamdklsamdklasmdkasmdklasdmkaldmaklsdmkasdmklas
                  kamsdlkadmklsadmlkamdkaldmalksdmaldkasmkdlamskdlsamkdmaklsdlka
                </Text>
                </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text style={{paddingLeft: 5}}>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>*/}



  </Content>
  </Container> 



          <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="camera" />
              <Text>Notícias</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Dúvidas</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('MapScreen')} >
              <Icon active name="navigate" />
              <Text>Mapa</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Chat</Text>
            </Button>
          </FooterTab>
        </Footer>

</ Drawer>

</View>
      
     


    );
  }
}

const styles = StyleSheet.create({
  
});