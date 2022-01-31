// COMANDO PARA INSTALAR O PICKER
// npm install @react-native-picker/picker

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      burger: 0,
      burgers:[
        {key: 1, nome: 'Catupa Onion', valor:48.9},
        {key: 2, nome: 'Supremo Bacon', valor:47.5},
        {key: 3, nome: 'Salad', valor:39.5},
        {key: 4, nome: 'Triplo Smash', valor:31.9}
      ]
    }
  }

  render(){

    let burgersItem = this.state.burgers.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Burger</Text>
        <Picker
        style={{marginBottom:15}}
        selectedValue={this.state.burger}
        onValueChange={(itemValue, itemIndex) => this.setState({burger: itemValue})}
        >
          {burgersItem}
        </Picker>

        <View style={styles.pedido}>
          <Text style={{textAlign:'center'}}>Meu pedido:</Text>
          <Text style={styles.burger}> {this.state.burgers[this.state.burger].nome} </Text>
          <Text style={styles.burger}> R${this.state.burgers[this.state.burger].valor.toFixed(2)} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  logo:{textAlign:'center', fontSize:20, paddingVertical:15, backgroundColor:'#880000', color:'#FFF'},
  burger:{marginVertical:15, fontSize:25, textAlign:'center'},
  pedido:{borderWidth:1, borderColor:'#D1D1D1', borderRadius:4, margin:20, padding:20}
})