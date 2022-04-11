import React from 'react';
import {Text, View} from 'react-native';
import Style from '../style'

export default props => {
    return (
        <View>
            <Text style={Style.h4}>
                {props.nome} {props.sobrenome}
            </Text>
        </View>
    )
}