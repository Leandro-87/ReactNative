import React, { Component } from 'react';
import { Text, TextInput, Button } from 'react-native';
import style from '../style';

export default class Mega extends Component {

    state = {
        qntNumeros: this.props.qntNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({qntNumeros: +qtde})
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.rancom() * 60) + 1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const { qntNumeros } = this.state
        const numeros = []

        for(let i = 0; i < qntNumeros; i++){
            const n = this.gerarNumerosNaoContido(numeros)
            numeros.push(this.gerarNumerosNaoContido(numeros))
        }

        numeros.sort((a, b) => a - b)

        this.setState({numeros})
    }

 render(){
  return (
      <>
        <Text>Sorteador de numeros:</Text>
        <TextInput
            keyboardType='numeric'
            style={{borderBottomWidth: 0.5}}
            placeholder='Quantos n° quer sortear?'
            value={`${this.state.qntNumeros}`}
            onChangeText={this.alterarQtdeNumero}
        />
        <Button 
            title='Boa Sorte'
            onPress={this.gerarNumeros}
        />
        <Text style={style.h2}>{this.state.numeros.join(',')}</Text>
      </>
   );
 }
}