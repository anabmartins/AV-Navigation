import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

const Images = () => {
    return <View style={styles.flex}>
    <Image style={styles.image} source={require('../assets/images/1.png')} />
     <Image style={styles.image} source={require('../assets/images/2.png')} />
     <Image style={styles.image} source={require('../assets/images/3.png')} />
     <Image style={styles.image} source={require('../assets/images/4.png')} />
     <Image style={styles.image} source={require('../assets/images/5.png')} />
     <Image style={styles.image} source={require('../assets/images/6.png')} />
     <Image style={styles.image} source={require('../assets/images/7.png')} />
     <Image style={styles.image} source={require('../assets/images/8.png')} />
    </View>
    }

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/icone.png')} />
      <Text style={styles.titulo}>Nice Bank</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.botao}>
      <Link href="/" style={styles.btnTxt}>VOLTAR</Link>
     </TouchableOpacity>
     <Text style={[styles.texto]}>GALERIA</Text>
     <Images></Images>
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
  },
  btnTxt:{
    color: '#753a06',
    fontWeight: 'bold',
    padding: 5,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 10,
  }
});
