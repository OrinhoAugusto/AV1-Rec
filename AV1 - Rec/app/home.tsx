import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/download.jpg')} style={styles.imagem}></Image>
                <Text>App do Augusto</Text>
            </View>
            <View style={styles.whole}>
                <View style={styles.ImageView}>
                    <Image source={require('../assets/aleatoria1.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria2.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria3.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria4.jpeg')} style={styles.imagem}></Image>
                </View>
                <View style={styles.ImageView}>
                    <Image source={require('../assets/aleatoria5.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria6.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria7.jpeg')} style={styles.imagem}></Image>
                    <Image source={require('../assets/aleatoria8.jpg')} style={styles.imagem}></Image>
                </View>
            </View>
            <View>
                <Link href="/sobre">Sobre</Link>
                <Link href="/cadastro">Cadastro</Link>
                <Link href="/">Index</Link>
            </View>
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
        gap: '20px',
        flexDirection: 'row',
    },
    imagem: {
        width: '70px',
        height: '70px',
    },
    ImageView: {
        flexDirection: 'column',
        gap: '20px',
    },
    whole: {
        flexDirection: 'row',
        gap: '20px',
    }
});
