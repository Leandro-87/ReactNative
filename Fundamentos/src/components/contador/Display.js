import React from 'react';
import { Text } from 'react-native';
import style from '../style';

export default props => {

 return (
    <>
        <Text style={style.h2}>
            {props.num}
        </Text>
    </>
  );
}