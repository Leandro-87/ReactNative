import React, {useState} from 'react';
import { Text, Button, View } from 'react-native';
import Style from './style';

export default ({inicia = 0, step = 1}) => {


    const [numero, setNumero] = useState(inicia)

    const soma = () => setNumero(numero + step)
    const sub = () => setNumero(numero - step)
   

 return (
     <>
        <Text style={[Style.h2, Style.display]}>{numero}</Text>
        <View style={[Style.row, , {width:'100%', justifyContent:'space-evenly'}]}>
            <Button title='+' onPress={soma} />
            <Button title='-' onPress={sub}/>
        </View>
     </>
 )
}