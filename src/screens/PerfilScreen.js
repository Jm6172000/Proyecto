import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PerfilScreen = () => {
  // Datos del usuario expandidos
  const userInfo = {
    nombre: "Jesus Manuel Meraz Marrufo.",
    email: "ManuelMeraz885@example.com",
    imagenUrl: "https://media.c5n.com/p/23e83bbc00263816974509a0e7ca37e0/adjuntos/326/imagenes/000/045/0000045267/1200x675/smart/foto-perfil-facebook.png",
    direccion: "José María Quiñones 201, Máximo Gámiz, 34230 Durango, Dgo.",
    ciudad: "Durango",
    formaPago: "Tarjeta de Crédito",
    telefono: "618-456-7890",
    sexo: "Masculino",
    fechaNacimiento: "22/03/2000",
    // Ajustes de estilo
    tamanoImagen: { width: 120, height: 120 }, // Ajuste de tamaño de imagen
    tamanoLetra: 16, // Ajuste de tamaño de letra
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.imagenUrl }} style={userInfo.tamanoImagen} />
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Nombre: {userInfo.nombre}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Correo: {userInfo.email}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Dirección: {userInfo.direccion}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Ciudad: {userInfo.ciudad}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Forma de Pago: {userInfo.formaPago}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Teléfono: {userInfo.telefono}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Sexo: {userInfo.sexo}</Text>
      <Text style={[styles.infoText, { fontSize: userInfo.tamanoLetra }]}>Fecha de Nacimiento: {userInfo.fechaNacimiento}</Text>
      <Button title="Editar Perfil" onPress={() => console.log('Editar Perfil')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 26, // Espacio a la izquierda para el texto
    backgroundColor: '#D9D9D9', // Establece el color de fondo a gris claro
    
  },
  infoText: {
    margin: 10,
  },
});


export default PerfilScreen;
