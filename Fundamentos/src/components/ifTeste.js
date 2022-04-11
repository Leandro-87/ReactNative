import React from 'react';
import { Text } from 'react-native';
import If from './if';
import style from './style';

export default props => {
    const usuario = props.usuario || {}
 return (
     <>
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text style={style.h3}>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>
     </>
  );
}