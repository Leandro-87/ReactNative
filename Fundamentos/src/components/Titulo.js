import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default props => <>
    <Text style={Style.h2}>{props.titulo}</Text>
    <Text style={Style.h3}>{props.subtitulo}</Text>
    </>