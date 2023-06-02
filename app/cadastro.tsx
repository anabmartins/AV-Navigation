import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/icone.png')} />
      <Text style={styles.titulo}>Nice Bank</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        keyboardType = 'numeric'
        autoCapitalize="none"
      />
        <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType = 'numeric'
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.botao}>
      <Link href="sobre" style={styles.btnTxt}>SALVAR</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
      <Link href="/" style={styles.btnTxt}>VOLTAR</Link>
      </TouchableOpacity>
      
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
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 30,
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
  input: {
    width: '50%',
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderColor: '#f68f34',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  }
});
