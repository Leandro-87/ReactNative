import React from 'react';
import {LogoBarbeariaFrequento} from './styles/styles'
import Perfil from '../pages/Perfil';
import {useNavigation} from '@react-navigation/native'


export default function BarbeariasFrequento({data}) {
  const navigation = useNavigation();

 return (
   
       <LogoBarbeariaFrequento
       style={{resizeMode: "contain", marginVertical:10}}
       source={data.logoBarbearia}
       onPress={() => navigation.navigate('Perfil')} />
  
  );
}