import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default props =>{
  const delta = props.max - props.min + 1
  const aleatório = parseInt(Math.random() * delta) + props.min

  return (
    <Text style={Style.h2}>
      O aleatório é: {aleatório}
    </Text>
  )
}