import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import api from '../services/api'

class Conversor extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0
        };

        this.converter = this.converter.bind(this)
      }
      
    async converter(){
        let de_para = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get(`/convert?q=${de_para}&compact=ultra&apiKey=af61e9909f00d06d7606`);
        let cotacao = response.data[de_para];
        
        let resultado = (cotacao * parseFloat(this.state.moedaB_valor));

        this.state({
            valorConvertido: resultado.toFixed(2)
        });
        Keyboard.dismiss();
    }

    render(){

        const {moedaA, moedaB} = this.props;

        return(
            <View style={styles.container}>
               
               <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput
                    placeholder="Valor"
                    style={styles.areaInput}
                    onChangeText={(moedaB_valor) => this.setState({moedaB_valor: moedaB_valor})}
                    keyboardType="numeric"
                />


                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.resultado}>
                    {(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{flex:1, justifyContent:'center'},
    titulo:{fontSize:30, fontWeight:'bold'},
    areaInput:{paddingVertical:30, fontSize:55},
    botaoArea:{backgroundColor:'darkgreen', padding:15, alignItems:'center', borderRadius:50},
    botaoTexto:{color:'#FFF', fontWeight:'bold', fontSize:15},
    resultado:{fontSize:55, marginTop:30}
})

export default Conversor