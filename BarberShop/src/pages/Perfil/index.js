import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import { Btn, BtnText, Container } from '../../assets/styles';

import { AuthContext } from '../../contexts/auth';

export default function Perfil() {
  
    const navigation = useNavigation();
    const {user, signOut} = useContext(AuthContext);

  return (
      <>
      <Header />
        <Container>

            <Text>Perfil</Text>
            <Text>{user && user.nome}</Text>
            <Text>{user && user.email}</Text>
        </Container>
        <View>
            <Btn onPress={ () => signOut()}>
                <BtnText>
                Sair
                </BtnText>
            </Btn>
            <Btn onPress={ () => navigation.navigate('Home')}>
                <BtnText>
                Home
                </BtnText>
            </Btn>
        </View>
    </>
  );
}