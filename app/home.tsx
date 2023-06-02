import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/icone.png')} />
      <Text style={styles.titulo}>Nice Bank</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.botao}>
      <Link href="/cadastro" style={styles.btnTxt}>ENTRAR</Link>
     </TouchableOpacity>
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
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 40,
    color: '#63a335',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "monospace",
    margin: 10,
    width: 200,
    color: '#f68f34',
  },
  botao:{
    backgroundColor: '#f68f34',
    borderRadius: 4,
    margin: 10,
    marginTop: 40,
  },
  btnTxt:{
    color: '#753a06',
    fontWeight: 'bold',
    padding: 5,
  }
});
