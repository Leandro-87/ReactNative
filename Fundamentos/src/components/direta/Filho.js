import React from 'react';
import { Text } from 'react-native';

export default props => {
    return (
        <>
            <Text style={{fontSize:22}}>{props.filhoA}</Text>
            <Text style={{fontSize:22}}>{props.filhoB}</Text>
        </>
    )
}