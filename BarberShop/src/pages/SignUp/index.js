import React, {useState, useContext} from 'react';
import { Platform, Keyboard, TouchableNativeFeedback } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {Background, Container, Logo, AreaInput, Input, Btn, BtnText} from '../../assets/styles'

export default function SignUp() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signUp} = useContext(AuthContext);

    function handleSignUp(){
      signUp(email, password, nome)
    }
    
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
          <Container
          behavior={Platform.OS === 'ios' ? 'padding' : ''}>

            <Logo source={require('../../assets/img/Logo.png')}/>

            <AreaInput>
              <Input 
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              value={nome}
              onChangeText={(text) => setNome(text)}
              />
            </AreaInput>

            <AreaInput>
              <Input 
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              />
            </AreaInput>
           
            <AreaInput>
              <Input 
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              />
            </AreaInput>

            <Btn onPress={handleSignUp}>
              <BtnText>Cadastrar</BtnText>
            </Btn>

          </Container>
      </Background>
    </TouchableNativeFeedback>
  );
}