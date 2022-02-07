// COMANDO PARA INSTALAR O PICKER
// npm install @react-native-picker/picker
// npm install @react-native-community/slider --save

import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Switch, TouchableOpacity, ImageBackground, textStyle} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component{

    constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 'Masculino',
      estudante: false,
      limite: 200,
      images: [
        
        require('./src/img/bg.jpg'),          // Local image
        require('./src/img/bg1.jpg'),          // Local image
      ]
    };
    
    this.solicitar = this.solicitar.bind(this)
  }
  
  solicitar(){
    alert(
      [`Nome: ${this.state.nome} \n`,
      `Idade: ${this.state.idade} \n`,
      `Sexo: ${this.state.sexo} \n`,
      (this.state.estudante) ? 'Sou Estudante' : 'Não Sou Estudante' + '\n',
      `Limite solicitado: R$ ${this.state.limite.toFixed(0)},00`]
      )
  }
  
  render(){
    
    const colorPlace = '#FFF';
    const imageBg = require('./src/img/bg.jpg');
    
    return(

      
      <ImageBackground source={imageBg} resizeMode="cover" style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput 
            placeholderTextColor={colorPlace}
            style={styles.input}
            placeholder="Nome:"
            onChangeText={(nomeInput) => this.setState({nome: nomeInput})}
          />
        </View>




        <View style={styles.box}>
          <TextInput 
            placeholderTextColor={colorPlace}
            style={styles.input}
            placeholder="Idade:"
            onChangeText={(nomeInput) => this.setState({idade: nomeInput})}
          />
        </View>
        



        <View style={styles.box}>
        <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Sexo:
          </Text>
          <Picker
            style={[styles.picker]}
            selectedValue={this.state.sexo}
            textStyle={{fontSize: 30}}
            onValueChange={(itemValor, itemIndex) => this.setState({sexo: itemValor})}
          >
            <Picker.Item label='Masculino' value='masculino' />
            <Picker.Item label='Feminino' value='feminino' />
            <Picker.Item label='Outro' value='outro' />
          </Picker>
       </View>

        

        <View style={[styles.flex, styles.box]}>
          <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Estudante
          </Text>
          <Switch
            value={this.state.estudante}
            onValueChange={(valorSwitch) => this.setState({estudante: valorSwitch })}
          />
        </View>
     

        <View style={styles.box}>
          <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Limite desejado:
          </Text>
          <Slider 
            style={{marginTop:10}}
            minimumValue={50}
            step={10}
            maximumTrackTintColor="white"
            maximumValue={2000}
            onValueChange={(limiteUsuario) => this.setState({limite: limiteUsuario})}
            value={this.state.limite}
          />
        </View>

        <View style={{width:'100%', paddingVertical:15, backgroundColor:'#2DB584', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#FFF'}}>
            R$: {this.state.limite.toFixed(0)}
          </Text>
        </View>

        
        <TouchableOpacity
          style={styles.btnSolicitar}
          onPress={this.solicitar}>
            <Text style={{color:'#FFF', fontWeight:'bold', fontSize:17}}>
              SOLICITAR
            </Text>
        </TouchableOpacity>
        
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center'},
  input:{fontSize:20, borderBottomWidth:1, borderColor:'rgba(255,255,255,.8)', color:'rgba(255,255,255,.8)'},
  picker:{color:'rgba(255,255,255,.8)',marginBottom:0},
  box:{marginVertical:15, paddingHorizontal:40},
  flex:{display:'flex', flexDirection:'row', justifyContent:'space-between'},
  fontBig:{fontSize:20},
  btnSolicitar:{width:'70%', alignSelf:'center', alignItems:'center', backgroundColor:'#2DB5B5', marginTop:50, paddingVertical:20, borderRadius:50},
})