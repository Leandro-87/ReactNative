import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import {Background, Container, Logo, AreaInput, Input, Btn, BtnText, Link, LinkText} from '../../assets/styles'

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password)
  }

  return (
    <Background>
        <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>

          <Logo source={require('../../assets/img/Logo.png')}/>

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

          <Btn onPress={handleLogin}>
            <BtnText>Acessar</BtnText>
          </Btn>

          <Link onPress={ () => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta!</LinkText>
          </Link>

          <Link onPress={ () => navigation.navigate('CadastrarMinhaBarbearia')}>
            <LinkText>Cadastrar minha barbearia</LinkText>
          </Link>

        </Container>
    </Background>
  );
}