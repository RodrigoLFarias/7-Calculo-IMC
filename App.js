import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [resultado, setResultado] = useState('');

 

 function calcular(){
   if(isNaN (peso) || isNaN (altura)){
     alert ("Insira um valor valido nos campos.")
     return

   }

   const valorCalculado = peso / Math.pow(altura, 2);
   setResultado(valorCalculado.toFixed(1));

 }

  return (
    <View style={styles.container}>

    <Text style={styles.titulo}>Calcule o seu IMC</Text>

    <TextInput style={styles.input} 
    placeholder='Digite o seu peso.(kg)'
    onChangeText={(valor) => setPeso(valor)}
    />

    <TextInput style={styles.input} 
    placeholder='Digite a sua altura. (m)'
    onChangeText={(valor) => setAltura(valor)}
    />
  
    <Button 
    title ='Calcular' 
    color ='black'
    onPress={calcular}
    />

    <Text style={styles.resultado}>{resultado}</Text>

    <Image
    source={{uri:"https://superafarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png"}}
    style={styles.imagem}

    />
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  titulo:{
    marginVertical: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'white'

},

imagem:{
  marginTop: 30,
  alignSelf: 'center',
  width: 300,
  height: 350,
  resizeMode: 'contain'

},
resultado: {
  fontSize:20,
  fontWeight: 'bold',
  textAlign: 'center'
 
}



});
