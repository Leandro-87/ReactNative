import React from 'react';
import { Text } from 'react-native';
import style from '../style';
import Itens from './Itens';

export default props => {

 return (
    <>
        <Text style={style.bold}>Lista para o churrasco</Text>
        {Itens.map( p => {
            return <Text style={style.txtJustify} key={p.id}>{p.id} - {p.nome}: {p.preco}</Text>
          }
        )}
    </>
  );
}