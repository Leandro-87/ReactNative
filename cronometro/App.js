import React, {Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    numero: 0,
    botao: "VAI"
  };

  this.timer = null;
  this.vai = this.vai.bind(this)
  this.limpar = this.limpar.bind(this)
}

vai(){

  if(this.timer != null){
    clearInterval(this.timer);
    this.timer = null;
    this.setState({botao: 'VAI'})
  } else {

    this.timer = setInterval( () => {
      this.setState({numero: this.state.numero + 0.1})
    }, 100);

    this.setState({botao: 'PARAR'})
  }


}

limpar(){
  if(this.timer != null){
    clearInterval(this.timer);
    this.timer = null;
  }
  this.setState({
    numero: 0,
    botao: 'VAI'
  })
}

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/clock.png')} style={styles.cronometro} />

        <Text style={styles.timer}>
          {this.state.numero.toFixed(1)}
        </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>
              {this.state.botao}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>
              ZERAR
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'blue'},
  timer:{marginTop:-160, color:'#FFF', fontSize:65},
  btnArea:{flexDirection:'row', marginTop: 120, height:40},
  btn:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white', height:60, margin:20, borderRadius:4},
  btnTexto:{fontSize:20, fontWeight:'bold'}
})
export default App;