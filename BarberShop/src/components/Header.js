import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation} from '@react-navigation/native';

import { Header, ButtonMenu } from './styles/styles';

export default function components() {
    const navigation = useNavigation();
 return (
    <Header>
        <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
            <Icon name="menu" color="#222" size={30} />
        </ButtonMenu>
   </Header>
  );
}