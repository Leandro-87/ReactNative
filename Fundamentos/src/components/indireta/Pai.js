import React, {useState} from 'react';
import { Text } from 'react-native';
import style from '../style';
import Filho from './Filho';

export default props => {
 
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={style.h2}>
            {texto}{num}
            </Text>
            <Filho min={0} max={100} funcao={exibirValor} />
        </>
    );
}