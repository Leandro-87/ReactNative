import React, { useState, useContext } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Picker from '../../components/Picker';
import {format} from 'date-fns'
import {AuthContext} from '../../contexts/auth'
import FinalizarCadastroBarbearia from './FinalizarCadastroBarbearia';

import { Background, AreaInput, Input, BtnText, Btn } from '../../assets/styles';
import firebase from '../../services/firebaseConnection'

export default function CadastrarMinhaBarbearia() {
  const navigation = useNavigation()

  const [nomeBarbeiro, setNomeBarbeiro] = useState('');
  const [nomeBarbearia, setNomeBarbearia] = useState('');
  const [cidadeBarbearia, setcidadeBarbearia] = useState('');
  const [numeroBarbeiros, setNumeroBarbeiros] = useState(null);
  const {user} = useContext(AuthContext)

  function cadastrarBarbearia(){
    Keyboard.dismiss();
   

    Alert.alert(
      'Confirmar cadastro',
      `Pronto para expor sua agenda para muitas pessoas`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Vamos lá',
          onPress: () => confirmaBarbearia()
        }
      ]
    )
        
  }

  // Cadastro de barbearia parceira
  async function confirmaBarbearia(){
    /*let uid = user.uid;
    let key = await database().ref('barbearia').child(uid).push().key;
    await firebase.database().ref('barbearia').child(uid).child(key).set({
      nomeBarbearia: nomeBarbearia,
      nomeBarbeiro: nomeBarbeiro,
      numeroBarbeiros: numeroBarbeiros,
      cidadeBarbearia: cidadeBarbearia,
      date: format(new Date(), 'dd/MM/yy')
    });*/
    Keyboard.dismiss();
    setNomeBarbearia('');
    navigation.navigate('Home')
  }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <Background>
            <AreaInput>
                <Input 
                placeholder="Rua"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={nomeBarbeiro}
                onChangeText={ (text) => setNomeBarbeiro(text)}
               />
            </AreaInput>
            <AreaInput>
                <Input 
                placeholder="Número"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={nomeBarbearia}
                onChangeText= {(text) => setNomeBarbearia(text)}
               />
            </AreaInput>
            <AreaInput>
                <Input 
                placeholder="Bairro"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={cidadeBarbearia}
                onChangeText= {(text) => setcidadeBarbearia(text)}
               />
            </AreaInput>

            <Picker onChange={setNumeroBarbeiros} numeroBarbeiros={numeroBarbeiros}/>

          <Btn onPress={cadastrarBarbearia}>
            <BtnText>Abrir agenda online</BtnText>
          </Btn>

   </Background>
   </TouchableWithoutFeedback>
  );
}