import {React, useState } from "react";
import { ImageBackground, View } from "react-native";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

 

const Pessoas = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue]= useState('');

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

 
  const onPress1 = () => setCount1((prevCount1) => prevCount1 + 1);
  const onPress2 = () => setCount2((prevCount2) => prevCount2 + 1);
  const onPress3 = () => setCount3((prevCount3) => prevCount3 + 1);
  
  const onPress4 = () => setCount1((prevCount1) => prevCount1 - 1);
  const onPress5 = () => setCount2((prevCount2) => prevCount2 - 1);
  const onPress6 = () => setCount3((prevCount3) => prevCount3 - 1 );
 
// const [navegacao, setNavegacao] = useState(false)
//   if(setNavegacao == true){
//   navegation.navigate('Carnes')
// }
// const { navigate } = useNavigation();
     
  async function calcAsycStorage(){
    await AsyncStorage.setItem('@app1', inputValue)
    const numbers = [
        { price: count1 },
        { price: count2 },
        { price: count3 }
      ]
      if(count1 < 0 || count2 < 0 || count3 < 0){
        alert ('Valor não aceito');
      }else{       
      const result2 = numbers.reduce((a, b) => a + b.price, 0);

      if(result2 <= 0 || result2 > 50){
        alert ('Valor de pessoas excedido')
      }else{
        alert ('valor aceito')
            getData()
            navigation.navigate('Opcoes')
        }
    
  }
  async function getData(){
    const response = await AsyncStorage.getItem('@app1')
    if(response){
        setValue(response)
        setNavegacao() == true;
        
    }
  }

}


  return (
   
      <View style={styles.cabecalho}>
        <ImageBackground  stylee={styles.fundo} source={require('../../../assets/fundo.jpg')}>
        <View><Text style={styles.texto}>Primeiro vamos À quantidade de pessoas: {'\n'} (Clique para selecionar a quantidade) {'\n'} Máx de 50 pessoas</Text>
         </View>
        
        
      

      <View style={styles.corpo}>
          

<View style={styles.homem}>
          <Image style={styles.ft} source={require('../../../assets/homem.png')} ></Image> 
          
        <TouchableOpacity style={styles.botaoAdd} onPress={onPress4}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
          
              <Text style={styles.texto}>{ count1 }</Text>

        <TouchableOpacity style={styles.botaoAdd} onPress={onPress1}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>

       
</View>


<View style={styles.muie}>
          <Image style={styles.ft} source={require('../../../assets/mulher.png')}></Image> 
          
        <TouchableOpacity style={styles.botaoAdd} onPress={onPress5}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>

          <Text style={styles.texto}> { count2 }</Text>

        <TouchableOpacity style={styles.botaoAdd} onPress={onPress2}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
</View>


<View style={styles.crianca}>
          <Image style={styles.ft} source={require('../../../assets/crianca.png')}></Image>

        <TouchableOpacity style={styles.botaoAdd} onPress={onPress6}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>

            <Text style={styles.texto}>{count3}</Text>

        <TouchableOpacity style={styles.botaoAdd} onPress={onPress3}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
          
</View>
        
       
          {/* <TouchableOpacity style={styles.botao2}  value={inputValue}  onChangeText={(value) => setInputValue(value)}   onPress = {calcAsycStorage}>

            <Text style={styles.texto}>ENVIAR</Text>

          </TouchableOpacity> */}

           <View style={styles.fixToText}>

                {/* <TouchableOpacity style={styles.botao}
                onpress={ () => navigation.navigate('Pessoas') }
     >
                    <Text style={styles.entrar}> ENTRAR </Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    style={styles.botao}
                    title="Pessoas"
                    value={inputValue}
                    onChangeText={(value) => setInputValue(value)}
                    onPress={ () => navigation.navigate('Opcoes')}
                >
                                        <Text style={styles.entrar}> ENTRAR </Text>


                </TouchableOpacity>

            </View>
        </View>
        </ImageBackground>
      
      </View>
    );
  
  };

    const styles = StyleSheet.create({

      texto: {
        color: '#ff9900',
        fontFamily:'Secular One sans-serif',
        fontSize:'18px', 
        margin:'2px',
        justifyContent:'center',
        margin:'auto',  
        textAlign:'center',
      },

      corpo:{
        alignItems:'stretch',
        marginTop:'39px',
      },
      
      muie:{
        display: 'flex',
        flexDirection:'row',
        marginTop: '20px',
      },
      
      homem:{
        display: 'flex',
        flexDirection:'row',
        marginTop:'20px',
      },
      
      crianca: {
        flexDirection:'row',
        display: 'flex',
        marginTop: '20px',
      },

     
      botao: {
        margin: '1px 4px',
        background: 'transparent',
        border: '3px solid #ff9900',
        borderRadius: "10px",
        width: '185px',
        height: '50px',
        marginTop:'135px',
        marginBottom:'60px',
    },

    botaoAdd:{
      border:'2px solid #ff9900',
      backgroundColor:'transparent',
      color: '#ff9900',

      borderRadius:'50%',

      fontSize:'50px',
      width:'40px',
      height:'40px',

      margin:'auto', 
},

    ft:{
      zIndex:'99',
      width:'80px',
      height:'80px',
    },

    entrar: {
        color: '#ff9900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
       
        fontSize: '24px',
    },

    fixToText: {
        flexDirection: 'collum',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto',
    },
      
     
      

// botao: {
//     border: '1px solid #ff9900',
//     backgroundColor: 'transparent',
//     color: '#ff9900',
//     padding: '5px 24px',
//     fontSize: '24px',
//     bordeRadius: '10px',
//     marginTop: '30px',
// },
// 
// texto: {
//     color: '#ff9900',
//     fontSize: '24px',
//     justifyContent: 'center',
//     display: 'flex',
//     fontFamily: 'Roboto Condensed, sans-serif',
// },
// corpo:{
//     marginTop: '100px',
// },
// fotos: {
//     width: '100px',
//     height: '100px',
// },
// numero: {
//     color: '#ff9900',
//     fontSize: '30px',
// },


    });

  export default Pessoas;