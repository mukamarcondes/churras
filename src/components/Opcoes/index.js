import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Opcoes() {
  return (
      <ImageBackground  source={require('../../../assets/fundo.jpg')} style={styles.fundo}>
        <View style={styles.inicio}>
          <Text style={styles.texto}>Primeiro vamos  à quantidade de pessoas:</Text>
            <Text style={styles.texto}>(Clique para selecionar a quantidade)</Text> 
            <Text style={styles.texto}>  Máx de 50 pessoas</Text>
        </View>

        <View style={styles.tudo}>

<View style={styles.um}>
        <TouchableOpacity> 
            <ImageBackground source={require('../../../assets/vaca.png')} style={styles.bovinas}></ImageBackground>
        </TouchableOpacity>
</View>

<View style={styles.dois}>
        <TouchableOpacity>
            <ImageBackground source={require('../../../assets/porco.png')} style={styles.suinas}></ImageBackground>
        </TouchableOpacity>
</View>       

<View style={styles.tres}>
        <TouchableOpacity> 
            <ImageBackground source={require('../../../assets/frango.png')}style={styles.frangos}></ImageBackground>
        </TouchableOpacity>
</View>

<View style={styles.quatro}>
        <TouchableOpacity> 
            <ImageBackground source={require('../../../assets/outros.png')} style={styles.outros}></ImageBackground>
        </TouchableOpacity>
</View>
        </View>

        <View style={styles.fixToText}>

    <TouchableOpacity style={styles.botão}>
      <Text style={styles.entrar}> AVANÇAR </Text>
        {/* linka para a proxima pagina */}
    </TouchableOpacity>
       </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    inicio: {
      alignItems: 'center',
      color: '#fff',
      alignItems:'center',
      justifyContent:'center',
      display:'flex',
      marginTop:'50px',
    },
    desce: {
      marginTop:'60px',
    },
    
    texto: {
      color: '#ff9900',
      fontFamily:'Secular One sans-serif',
      fontSize:'18px', 
      margin:'2px',
    },
    img: {
      width: 150,
      height: 150,
      margin:'auto',
    },
    fundo: {
      width: 360,
      height: 715,
    },
  
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
  
    botão:{
      margin:'1px 4px',
      background:'transparent',
      border:'3px solid #ff9900',
      borderRadius:"10px",
      width:'185px',
      height:'50px',
    },

    // Carnes

    tudo:{
        flexDirection: 'column',
        display:'flex',
    },


    um:{
        width: '115px',
        marginLeft: '50px',
    },dois:{
        width: '115px',
        marginLeft: '200px',
    },tres:{
        width: '115px',
        marginLeft: '50px',
    },quatro:{
        width: '115px',
        marginLeft: '200px',
    },

    bovinas:{
        background:'transparent',
        border:'3px solid #ff9900',
        borderRadius:"10px",
        width:'120px',
        height:'120px',
        justifyContent:'center',
        alignItems:'center',
    },
    suinas:{
        background:'transparent',
        border:'3px solid #ff9900',
        borderRadius:"10px",
        width:'120px',
        height:'120px',
        justifyContent:'center',
        alignItems:'center',
        
    },

    frangos:{
        background:'transparent',
        border:'3px solid #ff9900',
        borderRadius:"10px",
        width:'120px',
        height:'120px',
        justifyContent:'center',
        alignItems:'center',
    },
    outros:{
        background:'transparent',
        border:'3px solid #ff9900',
        borderRadius:"10px",
        width:'120px',
        height:'120px',
        justifyContent:'center',
        alignItems:'center', 
    },
// fimmde carnes

    entrar:{
       color:'#ff9900',
       justifyContent:'center',
       alignItems:'center',
       margin:'auto',
       fontSize:'24px',
       
    },
  
    fixToText: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      margin:'auto',
      
    },
  });