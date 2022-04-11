import React from 'react';
import { Text, View} from 'react-native';
import Style from './style'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Style.h4}>{num} é: 
            {num % 2 === 0
                ? <Text style={Style.h3}> Par</Text>
                : <Text style={Style.h3}> Impar</Text>
            }
            </Text>
        </View>
    )
}