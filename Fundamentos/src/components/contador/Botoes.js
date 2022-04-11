import React from 'react';
import { Button, View } from 'react-native';


export default props => {

    return (
        <View style={{flexDirection:'row'}}>
            <Button title='+' onPress={props.soma} />
            <Button title='-' onPress={props.sub}/>
        </View>
    );
    }