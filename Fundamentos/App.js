import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Style from './src/components/style';

import Comp1 from './src/components/Component'
import CompGrupoDefault, {CompGrupo2, CompGrupo3} from './src/components/GrupoComponent.js'
import MinMax from './src/components/MinMax'
import NumeroAleatorio from './src/components/NumeroAleatorio';
import Titulo from './src/components/Titulo';
import Botao from './src/components/Botao';
import Contador from './src/components/Contador';
import Pai from './src/components/direta/Pai';
import PaiIndireto from './src/components/indireta/Pai'
import ContadorV2 from './src/components/contador/ContadorV2'
import Platform from './src/components/Platform';
import Condicao from './src/components/Condicao';
import Familia from './src/components/relacao/Familia';
import MembroFamilia from './src/components/relacao/MembroFamilia';
import UsuarioLogado from './src/components/ifTeste'
import Churrasco from './src/components/Churrasco/Lista'
import ChurrascoV2 from './src/components/Churrasco/FlatLista'
import DigiteAlgo from './src/components/DigiteAlgo';
import Flex1 from './src/components/flexBox/Flex1';
import Mega from './src/components/classe/Mega';

export default () => (
   <SafeAreaView style={Style.Container}>
     <ScrollView>
        <Text style={[Style.h2, Style.txtCenter, Style.marginBottom2]}>Minha doc de React-Native</Text>
        <View style={Style.box}>
          <Text style={Style.titleBox}>Componente</Text>
          <Comp1 />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>export default function</Text>
          <CompGrupoDefault />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>export function CompGrupo2()</Text>
          <CompGrupo2 />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>function CompGrupo3() + export {CompGrupo3}</Text>
          <CompGrupo3 />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>export default (props)</Text>
          <MinMax min={5} max={10} />
          <MinMax min="40" max="70" />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>props + função</Text>
          <NumeroAleatorio min={1} max={60} />
        </View>

        <View style={Style.box}>
         <Text style={Style.titleBox}>Mais de props</Text>
          <Titulo
          titulo="Aqui entra o título por props do React Native"
          subtitulo='E aqui o subtitulo'
          />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Props com botão + Alerta amarelo</Text>
          <Botao title="Botão 1" />
        </View>

        <View style={Style.box}>
         <Text style={Style.titleBox}>useState</Text>
          <Contador  />
          <Contador inicia={100} step={10} />
        </View>

        <View style={Style.box}>
         <Text style={Style.titleBox}>Comunicação direta</Text>
          <Pai />
        </View>

        <View style={Style.box}>
         <Text style={Style.titleBox}>Comunicação INdireta</Text>
          <PaiIndireto />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Contador com useState</Text>
          <ContadorV2 />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Platform</Text>
          <Platform />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Condição</Text>
          <Condicao num={1}/>
          <Condicao num={2}/>
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Componente dentro de componente (children)</Text>
            <Familia style={Style.marginBottom1}>
              <MembroFamilia nome='Leandro' sobrenome='Garcia' />
              <MembroFamilia nome='Flávio' sobrenome='Garcia' />
            </Familia>
            <Familia>
              <MembroFamilia nome='Fernanda' sobrenome='Acencio' />
              <MembroFamilia nome='Camilla' sobrenome='Acencio' />
            </Familia>
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Renderização Condicional</Text>
          <UsuarioLogado usuario={{ nome: 'Leandro', email: 'leandro@darthverde.com.br'}} />
          <UsuarioLogado usuario={{ nome: 'Leandro'}} />
          <UsuarioLogado usuario={{ email: 'q@w.com'}} />
          <UsuarioLogado usuario={{ }} />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Listagem</Text>
          <Churrasco />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Flat List</Text>
          <ChurrascoV2 />
        </View>

        <View style={Style.box}>
          <Text style={Style.titleBox}>Componente controlado (Text Input)</Text>
          <DigiteAlgo />
        </View>
        <View style={Style.box}>
          <Text style={Style.titleBox}>Flex</Text>
          <ScrollView horizontal={true} style={{flexDirection:'row'}}>
            <View style={{marginHorizontal:10}}>
              <Text>flex-start</Text>
              <Flex1 justify="flex-start"/>
            </View>

            <View style={{marginHorizontal:10}}>
              <Text>center</Text>
              <Flex1 justify="center"/>
            </View>

            <View style={{marginHorizontal:10}}>
              <Text>flex-end</Text>
              <Flex1 justify="flex-end"/>
            </View>

            <View style={{marginHorizontal:10}}>
              <Text>space-around</Text>
              <Flex1 justify="space-around"/>
            </View>

            <View style={{marginHorizontal:10}}>
              <Text>space-between</Text>
              <Flex1 justify="space-between"/>
            </View>
            
            <View style={{marginHorizontal:10}}>
              <Text>space-evenly</Text>
              <Flex1 justify="space-evenly"/>
            </View>
            </ScrollView>
        </View>

    </ScrollView>
   </SafeAreaView>
);

