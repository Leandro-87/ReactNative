import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Background, Logo, AreaInput, Input, BtnText, Btn } from '../../assets/styles';
import Picker from '../../components/Picker';
export default function CadastrarMinhaBarbearia() {

  const [nomeBarbeiro, setNomeBarbeiro] = useState('')
  const [nomeBarbearia, setNomeBarbearia] = useState('')
  const [numeroBarbeiros, setNumeroBarbeiros] = useState('1Barbeiro')

 return (
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <Background>
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

          <Picker onChange={setNumeroBarbeiros} numeroBarbeiros={numeroBarbeiros}/>

          <Btn>
            <BtnText>Cadastrar minha barbearia</BtnText>
          </Btn>

   </Background>
   </TouchableWithoutFeedback>
  );
}