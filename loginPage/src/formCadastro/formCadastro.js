import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Switch, TouchableOpacity, ImageBackground, textStyle} from 'react-native';

<ImageBackground source={imageBg} resizeMode="cover" style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput 
            placeholderTextColor={colorPlace}
            style={styles.input}
            placeholder="Nome:"
            onChangeText={(nomeInput) => this.setState({nome: nomeInput}) }
          />
        </View>




        <View style={styles.box}>
          <TextInput 
            placeholderTextColor={colorPlace}
            style={styles.input}
            placeholder="Idade:"
            onChangeText={(nomeInput) => this.setState({idade: nomeInput})}
          />
        </View>
        



        <View style={styles.box}>
        <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Sexo:
          </Text>
          <Picker
            style={[styles.picker]}
            selectedValue={this.state.sexo}
            textStyle={{fontSize: 30}}
            onValueChange={(itemValor, itemIndex) => this.setState({sexo: itemValor})}
          >
            <Picker.Item label='Masculino' value='masculino' />
            <Picker.Item label='Feminino' value='feminino' />
            <Picker.Item label='Outro' value='outro' />
          </Picker>
       </View>

        

        <View style={[styles.flex, styles.box]}>
          <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Estudante
          </Text>
          <Switch
            value={this.state.estudante}
            onValueChange={(valorSwitch) => this.setState({estudante: valorSwitch})}
          />
        </View>
     

        <View style={styles.box}>
          <Text style={[styles.fontBig, {color:'#FFF'}]}>
            Limite desejado:
          </Text>
          <Slider 
            style={{marginTop:10}}
            minimumValue={50}
            step={10}
            maximumTrackTintColor="white"
            maximumValue={2000}
            onValueChange={(limiteUsuario) => this.setState({limite: limiteUsuario})}
            value={this.state.limite}
          />
        </View>

        <View style={{width:'100%', paddingVertical:15, backgroundColor:'#2DB584', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'#FFF'}}>
            R$: {this.state.limite.toFixed(0)}
          </Text>
        </View>

        
        <TouchableOpacity
          style={styles.btnSolicitar}
          onPress={this.solicitar}>
            <Text style={{color:'#FFF', fontWeight:'bold', fontSize:17}}>
              SOLICITAR
            </Text>
        </TouchableOpacity>
        
        </View>
      </ImageBackground>