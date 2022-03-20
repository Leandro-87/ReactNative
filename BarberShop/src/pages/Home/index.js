import React, {useContext, useState} from 'react';
import { View, Text } from 'react-native';
import { Btn, BtnText, Container, BarbsFrequento } from '../../assets/styles';
import Header from '../../components/Header';
import BarbeariasFrequento from '../../components/BarbeariasFrequento';

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  
  const [barbeariasFrequento, setBarbeariasFrequento] = useState([
    {key: '1', barbearia:'Barbearia Vito Andolini'},
    {key: '2', barbearia:'Barbados'},
    {key: '3', barbearia:'Antonio Brasileiro'},
    {key: '4', barbearia:'Fusion'}
  ])

  const {user, signOut} = useContext(AuthContext);

  return (
    <Container>
      <Header />
        <Text>Busca barbearia (HOME)</Text>
        <Text>{user && user.nome}</Text>
        <Text>{user && user.email}</Text>

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