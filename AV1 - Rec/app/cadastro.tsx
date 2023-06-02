import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/download.jpg')} style={styles.imagem}></Image>
                <Text>App do Augusto</Text>
            </View>
            <View style={styles.inputView}>
                <p>Campo de Nome</p>
                <TextInput style={styles.input} placeholder={'Nome'} />
                <p>Campo de e-mail</p>
                <TextInput style={styles.input} placeholder={'E-mail'} />
                <p>Campo de data de nascimento</p>
                <TextInput style={styles.input} placeholder={'Data de nascimento'} />
                <p>Campo de CPF</p>
                <TextInput style={styles.input} placeholder={'Digite seu CPF'} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.SaveButton}>Salvar</TouchableOpacity>
                <TouchableOpacity style={styles.GoBackButton}>Voltar</TouchableOpacity>
                <Link href="/home">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/">Index</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px',
        flexDirection: 'row',
    },
    imagem: {
        width: '100px',
        height: '100px',
    },
    input: {
        width: '300px',
        height: '30px',
        padding: '5px',
        backgroundColor: '#E8E8E8'
    },
    SaveButton: {
        width: '100px',
        height: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D0D0D0'
    },
    GoBackButton: {
        width: '100px',
        height: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    buttonView: {
        flexDirection: 'column',
        gap: '20px',
    },
    inputView: {

    }
});
