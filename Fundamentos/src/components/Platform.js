import React from 'react';
import { Text, Platform} from 'react-native';
import Style from './style'

export default _ => {

    if(Platform.OS === 'android'){
        return(
            <Text>Seu sistema operacional é: 
                <Text style={Style.h2}> Android</Text>
            </Text>
        ) 
    }else if (Platform.OS === 'ios') {
        return (
            <Text>Seu sistema operacional é :
                <Text style={Style.h2}>iOS</Text>
            </Text>
        )
    } else {
        return <Text>Não conheço seu Sistema Operacional</Text>
    }

 }
