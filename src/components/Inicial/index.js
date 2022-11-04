import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useState } from 'react';

export default function Inicial({navigation}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <ImageBackground source={require('../../../assets/fundo.jpg')} style={styles.fundo}>
            <View style={styles.inicio}>
                <Text style={styles.texto}>Bem-vindo ao </Text>
                <Text style={styles.texto}>CalcChurras !</Text>
            </View>

            <View style={styles.desce}>
                <ImageBackground source={require('../../../assets/boi.png')} style={styles.img}></ImageBackground>
            </View>


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
                    onPress={ () => navigation.navigate('Pessoas')}
                >
                                        <Text style={styles.entrar}> ENTRAR </Text>


                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    inicio: {
        alignItems: 'center',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: '50px',
        
    },
    desce: {
        marginTop: '60px',
    },

    texto: {
        color: '#ff9900',
        fontFamily: 'Secular One sans-serif',
        fontSize: '35px',
        margin: '20px',
    },
    img: {
        width: 150,
        height: 150,
        margin: 'auto',
    },
    fundo: {
        width: 360,
        height: 715,
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
    },

    botao: {
        margin: '1px 4px',
        background: 'transparent',
        border: '3px solid #ff9900',
        borderRadius: "10px",
        width: '185px',
        height: '50px',
    },

    entrar: {
        color: '#ff9900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        fontSize: '24px',

    },

    fixToText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto',

    },
});