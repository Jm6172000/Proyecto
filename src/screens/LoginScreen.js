// LoginScreen.js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

function LoginScreen({ navigation }) {
  const [Correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (Correo === 'ManuelMeraz885@example.com' && password === '123456') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.orangeBox} />
      <SafeAreaView style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/20/2b/44/202b44581b94510f1bef156afaa7c9fa.jpg' }}
        />
        <Text style={styles.paragraph}>Login</Text>
        <Card style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            value={Correo}
            onChangeText={setCorreo}
          />
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Enviar Formulario</Text>
          </TouchableOpacity>
        </Card>
      </SafeAreaView>
      <View style={styles.blueBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Aquí copia y pega los estilos desde tu código original
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  orangeBox: {
    height: 80,
    backgroundColor: '#F09559',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  blueBox: {
    height: 80,
    backgroundColor: '#4790A0',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },
  input: {
    height: 50,
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  passwordInput: {
    borderColor: '#000000', // Ajusta el color del borde al mismo que el fondo de la aplicación
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 75, // Ajusta este valor para controlar el redondeo
  }
  
  // ... Resto de tus estilos
});

export default LoginScreen;
