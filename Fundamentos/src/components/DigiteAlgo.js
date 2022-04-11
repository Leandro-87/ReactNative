import React, {useState} from 'react';
import { TextInput, Text } from 'react-native';

export default props => {
    const [digitado, setDigitado] = useState('')
    return (
        <>
            <TextInput 
            placeholder='Digite algo'
            value={digitado}
            onChangeText={text => setDigitado(text)}
            />
            <Text>Digitou: {digitado}</Text>
        </>
    )
}