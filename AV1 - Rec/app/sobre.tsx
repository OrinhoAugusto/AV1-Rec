import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/download.jpg')} style={styles.imagem}></Image>
            <Text>App do Augusto</Text>
            <p style={styles.paragrafo}>Texto da página sobre da minha prova. Só enchendo linguiça pra completar as 4 linhas dessa parte. Última frase pra chegar na quarta linha.</p>
            <Link href="/home">Home</Link>
            <Link href="/cadastro">Cadastro</Link>
            <Link href="/">Index</Link>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: '100px',
        height: '100px',
    },
    paragrafo: {
        width: '300px',
        textAlign: 'center',
    }
});
