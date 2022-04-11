import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    Container: {flex:1, padding:20, backgroundColor:'#f6f6f6'},
    row: {flexDirection:'row'},
    h1: {fontSize:28},h2: {fontSize:22},h3: {fontSize:18},h4: {fontSize:14},h5: {fontSize:11},
    bold: {fontWeight:'bold'},
    justifyCenter:{justifyContent:'center'}, justifyAround:{justifyContent:'space-around'},
    txtCenter:{textAlign:'center'}, txtJustify:{textAlign:'justify'},
    box: {marginVertical:10, paddingHorizontal:20, paddingBottom:18, backgroundColor:'#FFF', borderRadius:6},
    marginBottom1: {marginBottom:60}, marginBottom2: {marginBottom:12}, marginBottom3: {marginBottom:20},

    titleBox:{fontWeight:'bold', textAlign:'center', paddingTop:12, paddingBottom:5, marginBottom:5, borderBottomWidth:1, borderColor:'#f0f0f0'},
    display: {paddingVertical:10, textAlign:'center', marginBottom:5},
})