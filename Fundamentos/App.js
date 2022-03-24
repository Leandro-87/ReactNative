import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Style from './src/components/style';

import Comp1 from './src/components/Component1'
import CompGrupoDefault, {CompGrupo2, CompGrupo3} from './src/components/GrupoComponent.js'
import MinMax from './src/components/MinMax'
import NumeroAleatorio from './src/components/NumeroAleatorio';
import Titulo from './src/components/Titulo';
import Botao from './src/components/Botao';
import Contador from './src/components/Contador';

export default () => (
   <SafeAreaView style={style.Container}>
     <ScrollView>
        <View style={Style.box}>
          <Comp1 />
        </View>

        <View style={Style.box}>
          <CompGrupoDefault />
        </View>

        <View style={Style.box}>
          <CompGrupo2 />
        </View>

        <View style={Style.box}>
          <CompGrupo3 />
        </View>

        <View style={Style.box}>
          <MinMax min={5} max={10} />
          <MinMax min="40" max="70" />
        </View>

        <View style={Style.box}>
          <NumeroAleatorio min={1} max={60} />
        </View>

        <View style={Style.box}>
          <Titulo
          titulo="Aqui entra o título por props do React Native"
          subtitulo='E aqui o subtitulo'
          />
        </View>

        <View style={Style.box}>
          <Botao title="Botão 1" />
        </View>

        <View style={Style.box}>
          <Contador  />
          <Contador inicia={100} step={10} />
        </View>

    </ScrollView>
   </SafeAreaView>
);

const style = StyleSheet.create({
  Container: {flex:1, padding:20, backgroundColor:'#f6f6f6'}
})