import React from 'react';
import { Button } from 'react-native';

export default props => {
 
    function executar() {
        console.warn('Funcao clicada')
    }

    return (
        <>
            <Button 
                title={props.title}
                onPress={executar}
            />

            <Button 
                title='Executar 2'
                onPress={() => console.warn('Funcao direta no onPress')}
            />
        </>
    )
}