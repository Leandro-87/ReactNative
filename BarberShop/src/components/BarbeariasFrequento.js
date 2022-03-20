import React from 'react';
import { View, Text } from 'react-native';

export default function BarbeariasFrequento({data}) {
 return (
   <View>
       <Text>{data.barbearia}</Text>
   </View>
  );
}