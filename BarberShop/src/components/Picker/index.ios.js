import React from "react";
import {Picker} from '@react-native-picker/picker';
import {PickerView} from './styles';

export default function Pickers({onChange, numeroBarbeiros}){
    return(
        <PickerView>
            <Picker
            style={{
                width:'100%'
            }}
            selectedValue={numeroBarbeiros}
            onValueChange={(valor) => onChange(valor) }
            >
                <Picker.Item label='Sou carreira solo' value='1Barbeiro' />
                <Picker.Item label='2' value='2Barbeiro' />
                <Picker.Item label='3' value='3Barbeiro' />
                <Picker.Item label='4' value='4Barbeiro' />
                <Picker.Item label='5' value='5Barbeiro' />
                <Picker.Item label='Mais que 5' value='maisQue5' />
            </Picker>
        </PickerView>
    )
}