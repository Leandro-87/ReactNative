import React, { useState, useContext } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {format} from 'date-fns'
import {AuthContext} from '../../contexts/auth'
import FinalizarCadastroBarbearia from './FinalizarCadastroBarbearia';

import { Container, Logo, AreaInput, Input, BtnText, Btn } from '../../assets/styles';
import firebase from '../../services/firebaseConnection'

export default function CadastrarMinhaBarbearia() {
  const navigation = useNavigation()

  const [nomeBarbeiro, setNomeBarbeiro] = useState('');
  const [nomeBarbearia, setNomeBarbearia] = useState('');
  const [cidadeBarbearia, setcidadeBarbearia] = useState('');
  const {user} = useContext(AuthContext)

  function cadastrarBarbearia(){
    Keyboard.dismiss();
    if(nomeBarbeiro || nomeBarbearia || cidadeBarbearia === null){
      alert('Preencha todos os campos.');
      return;
    } 

    Alert.alert(
      'Confirmar cadastro',
      `${nomeBarbeiro} cadastrou ${nomeBarbearia}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Confirmar',
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
    navigation.navigate('FinalizarCadastroBarbearia')
  }

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <Container>
            <Logo source={require('../../assets/img/Logo.png')}/>
            <Text>Cadastro de barberia</Text>
            <AreaInput>
                <Input 
                placeholder="Meu nome"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={nomeBarbeiro}
                onChangeText={ (text) => setNomeBarbeiro(text)}
               />
            </AreaInput>
            <AreaInput>
                <Input 
                placeholder="Nome da Barbearia"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={nomeBarbearia}
                onChangeText= {(text) => setNomeBarbearia(text)}
               />
            </AreaInput>
            <AreaInput>
                <Input 
                placeholder="Cidade"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                value={cidadeBarbearia}
                onChangeText= {(text) => setcidadeBarbearia(text)}
               />
            </AreaInput>


          <Btn onPress={cadastrarBarbearia}>
            <BtnText>Cadastrar minha barbearia</BtnText>
          </Btn>

    </Container>
   </TouchableWithoutFeedback>
  );
}