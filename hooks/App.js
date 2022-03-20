// npm install @react-native-async-storage/async-storage

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Keyboard} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const foco = useRef(null)

  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null){
        setNome(nomeStorage)
      }
    }

    getStorage();

  }, [])

  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();

  }, [nome])

  function alteraNome(){
    setNome(input);
    setInput('');
    Keyboard.dismiss();
  }

  function novoNome(){
    foco.current.focus()
  }

  const letrasNome = useMemo(() => nome.length, [nome]);
  

  return(
    <View style={{flex:1, padding:15}}>
      <TextInput
        style={styles.campo}
        placeholder='Digite seu nome'
        value={input}
        onChangeText={(texto) => setInput(texto)}
        ref={foco}
      />

      <TouchableOpacity style={styles.botao} onPress={alteraNome}>
        <Text>Altera com useState</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{nome}</Text>
      <Text style={styles.resultado}>Letras: {letrasNome}</Text>
      <TouchableOpacity
      style={styles.botao}
      onPress={novoNome} >
        <Text>Novo nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  campo:{fontSize:20},
  botao:{padding:15, borderRadius:4, backgroundColor:'#88ff99'},
  resultado:{fontSize:25, textAlign:'center', marginVertical:15}
})