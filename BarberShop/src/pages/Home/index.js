import React, {useContext, useState} from 'react';
import { Text } from 'react-native';
import { Btn, BtnText, Container, BarbsFrequento, Background, AreaInput, Input } from '../../assets/styles';
import Header from '../../components/Header';
import BarbeariasFrequento from '../../components/BarbeariasFrequento';
import {useNavigation} from '@react-navigation/native';
import Stack from '../../routes/Stack'

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const navigation = useNavigation();
  
  const [barbeariasFrequento, setBarbeariasFrequento] = useState([
    {key: '1', barbearia:'Vito Andolini', logoBarbearia: require('../../assets/img/logoBarbearia/vito-andolini.png') },
    {key: '2', barbearia:'Barbados', logoBarbearia: require('../../assets/img/logoBarbearia/barbearia-1.png')},
    {key: '3', barbearia:'Antonio Brasileiro', logoBarbearia: require('../../assets/img/logoBarbearia/barbearia-2.png')},
    {key: '4', barbearia:'Fusion', logoBarbearia: require('../../assets/img/logoBarbearia/barbearia-3.png')}
  ])

  const {user, signOut} = useContext(AuthContext);

  return (
    <Container>
      <Header />
        <Text>Procurar barbearia</Text>
        {/*<Text>{user && user.nome}</Text>
        <Text>{user && user.email}</Text>*/}
        <AreaInput>
          <Input  
           placeholder="Ex: Corleone"
           autoCorrect={false}
           autoCapitalize="none"           
          />
        </AreaInput>
        <Btn onPress={() => navigation.navigate('HomeBarbearia')}>
          <BtnText>Buscar</BtnText>
        </Btn>

        <Btn onPress={() => navigation.navigate('BuscarPeloMapa')}>
          <BtnText>Procurar no mapa</BtnText>
        </Btn>

        <Text style={{ textAlign:'center'}}>Barbearias que frequento</Text>
        <BarbsFrequento
        showsVerticalScrollIndicator={false}
        data={barbeariasFrequento}
        keyExtractor={item => item.key}
        renderItem={({item}) => (<BarbeariasFrequento data={item}/>)}
        
        />

      
        <Btn onPress={ () => signOut()}>
          <BtnText>
            Sair
          </BtnText>
        </Btn>
    </Container>
  );
}