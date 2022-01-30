import React, {Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.jpg')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte, Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vai mais longe do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Uma iniciativa mal-sucedida não significa o final de tudo, Sempre existe uma nova oportunidade.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    ]
  }
  

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase:'"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoito-aberto.jpg')
    })
  }

render(){
  return(
    <View style={styles.container}>
      <Image
        source={this.state.img}
        style={styles.img}
      />
      <Text style={styles.mensagem}>
        {this.state.textoFrase}
      </Text>
      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

}
  

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly'},
  mensagem:{
    fontSize: 20,
    color: 'green',
    padding: 10,
    textAlign:'center'
  },
  btnArea:{
    backgroundColor: 'orange',
    padding:15,
    borderRadius: 6,
  },
  btnTexto:{
     color: 'white',
     fontSize: 18

  },
  img:{
    width: 300, height: 300
  }
})


export default App;
