// MODELO APP.JS

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';

export default class Entrar extends Component{

  render(){
    return(
        
          <View style={{width:'90%'}} >
            <Text style={{fontSize:30, textAlign:'center'}}>Sou um modal</Text>
            <Image 
            source={require('./img/vito.jpg')}
            style={{width:'100%', height:450}}
            />
            <Button title='Sair' onPress={this.props.fechar} />
          </View>
    );
  }
}
