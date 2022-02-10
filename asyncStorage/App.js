import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Keyboard} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: '',
      
    }

    this.gravaNome = this.gravaNome.bind(this)
  };

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nme: value})
    })
  }

  async componentDidUpdate(_, prevState){
    if(prevState !== nome){
     await AsyncStorage.setItem('nome', this.state.nome)
    }

  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss()
  };



  render(){
    return(
      <View style={styles.container}>
        <View style={styles.area}>
          <TextInput 
            style={styles.input}
            onChange={this.state.input}
            onChangeText={(text)=> this.setState({input: text})}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity
            style={styles.addBtn}
            onPress={this.gravaNome}
            >
            <Text style={styles.add}>ADD</Text>
          </TouchableOpacity>
           
        </View>

        <Text style={styles.texto}>
          {this.state.nome}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1, padding:20},
  area:{flexDirection:'row'},
  input:{width:'80%', borderWidth:0.2, marginRight:5},
  addBtn:{width:'20%', backgroundColor:'green', justifyContent:'center', alignItems:'center'},
  add:{backgroundColor:'green', color:'white', fontWeight:'bold'},
  texto:{paddingVertical:10, fontSize:20, textAlign:'center'}
})

export default App;