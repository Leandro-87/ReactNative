import React from 'react';
import { Text } from 'react-native';
import Style from './style'

export default (props) => {
    return (
        <Text style={Style.h3}>
            O valor {props.max} é maior que {props.min}
        </Text>
    )
}
 