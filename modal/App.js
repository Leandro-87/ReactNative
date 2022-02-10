// MODELO APP.JS

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Modal, Image} from 'react-native';

import Entrar from './src/Entrar.js'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)

  };

  entrar(){
    this.setState({modalVisible: true});
  }

  sair(visible){
    this.setState({modalVisible: false});
  }

  render(){
    return(
      
        <View style={styles.container}>
          <Button title='Entrar' onPress={this.entrar} />

            <Modal transparent={true} animationType='slide' visible={this.state.modalVisible} >
              <View style={{ flex:1, alignItems:'center', justifyContent:'center', borderRadius:20, shadowColor:'#555', elevation:10}}>
                  <Entrar fechar={ () => this.sair(false)} />
              </View>
            </Modal>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#DDD'}
})

export default App;