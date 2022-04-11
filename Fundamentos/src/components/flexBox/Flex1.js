import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        
            <View style={[Style.c1, {justifyContent: props.justify}]}>
                <Quadrado bgCor="green"/>
                <Quadrado bgCor="#f3f3f3"/>
                <Quadrado bgCor="red"/>
            </View>
        
    )
}

const Style = StyleSheet.create({
    c1: {height:250, width:120, backgroundColor: '#333', alignItems:'center' }
})