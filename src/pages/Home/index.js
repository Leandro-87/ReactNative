import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { Btn, BtnText } from '../../assets/styles';

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  
  const {user, signOut} = useContext(AuthContext);

  return (
    <View>
        <Text>Home</Text>
        <Text>{user && user.nome}</Text>
        <Text>{user && user.email}</Text>
        <Btn onPress={ () => signOut()}>
          <BtnText>
            Sair
          </BtnText>
        </Btn>
    </View>
  );
}