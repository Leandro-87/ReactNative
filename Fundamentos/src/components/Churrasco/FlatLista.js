import React from 'react';
import { FlatList, Text } from 'react-native';
import style from '../style';
import Itens from './Itens';

export default props => {

  const produtosRender = ({ item }) => {
    return <Text>{item.id} - {item.nome}: {item.preco}</Text>
  }

 return (
    <>
        <Text style={style.bold}>Lista para o churrasco</Text>
        <FlatList
          data={Itens}
          keyExtractor={i => `${i.id}`}
          renderItem={produtosRender}
        />
    </>
  );
}