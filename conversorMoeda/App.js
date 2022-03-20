// MODELO APP.JS

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Keyboard} from 'react-native';

import Conversor from './src/Conversor';

class App extends Component{

   render(){
    return(
      <View style={styles.container}>
       <Conversor moedaA="USD" moedaB="BRL" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1, alignItems:'center'}
})

export default App;