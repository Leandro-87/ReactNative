import React from 'react';
import { Text } from 'react-native';

export default function () {
    return <Text>Componente 1</Text>
}

export function CompGrupo2() {
    return <Text>Componente 2</Text>
}

function CompGrupo3() {
    return <Text>Componente 3</Text>
}

export {CompGrupo3}