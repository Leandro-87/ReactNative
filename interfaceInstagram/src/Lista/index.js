import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{


    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };
        this.iconLike = this.iconLike.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }

    iconLike(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like(){
        let feed = this.state.feed

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return(
            <Text>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'} 
            </Text>
        )
    }

    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                    resizeMode='cover'
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.fotoPerfil}
                    />
                    
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image
                style={styles.fotoPublicacao}
                source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaIcons}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                        source={this.iconLike(this.state.feed.likeada)}
                        style={styles.icone}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require('../img/send.png')}
                        style={styles.icone}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.likers}>
                    {this.mostraLikes(this.state.feed.likers)}
                </Text>

                <View style={styles.viewRodape}>
                    
                    <Text style={styles.descricao}>
                        <Text style={{fontWeight:'bold'}}>{this.state.feed.nome}</Text>: {this.state.feed.descricao}
                    </Text>
                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewPerfil:{flexDirection:'row', alignItems:'center', padding:10},
    fotoPerfil:{width:50, height:50, borderRadius:25},
    fotoPublicacao:{flex:1, height:400, alignItems:'center'},
    nomeUsuario:{fontSize:18, textAlign:'left', color:'#222', marginStart:8},
    areaIcons:{flexDirection:'row', justifyContent:'flex-start'},
    icone:{width:33, height:33, margin:8},
    descricao:{color:'#222', paddingHorizontal:8, marginBottom:15},
    likers:{fontWeight:'bold', paddingLeft:8}
})
export default Lista;