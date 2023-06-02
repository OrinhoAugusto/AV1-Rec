import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/download.jpg')} style={styles.imagem}></Image>
      <Text>App do Augusto</Text>
      <p style={styles.paragrafo}>Este texto é completamente aleatório, eu só estou escrevendo para completar as 4 linhas solicitadas pelo professor Bruno Bandeira Fernandes na atividade.</p>
      <Link href="/sobre">Sobre</Link>
      <Link href="/cadastro">Cadastro</Link>
      <Link href="/home">Home</Link>
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
    width: '300px'
  }
});
