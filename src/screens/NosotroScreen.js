import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EmpresaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Text style={styles.subtitle}>Misión</Text>
      <Text style={styles.text}>
      Nuestra misión es revolucionar el mundo de la moda ofreciendo productos de alta calidad y diseño único, comprometiéndonos con la sostenibilidad ambiental en cada paso. Buscamos empoderar a nuestros clientes a través de la moda, proporcionando opciones que no solo realcen su individualidad, sino que también promuevan prácticas éticas y responsables. Nos esforzamos por mantener una cadena de suministro transparente y ética, asegurando el bienestar de todos los involucrados en la creación de nuestras prendas.
      </Text>
      <Text style={styles.subtitle}>Visión</Text>
      <Text style={styles.text}>
      Visionamos establecernos como la marca de ropa más influyente y respetada a nivel mundial, liderando el cambio hacia prácticas más sostenibles en la industria de la moda. Nuestra visión es crear una comunidad global de clientes conscientes, unidos por el amor a la moda y el respeto por el planeta. Aspiramos a innovar constantemente en nuestros diseños y procesos, para ser pioneros en sostenibilidad, mientras mantenemos un compromiso inquebrantable con la calidad y la ética..
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#D9D9D9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centra el texto del título
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', // Centra el texto del subtítulo
  },
  text: {
    fontSize: 16,
    textAlign: 'justify', // Justifica el texto de los párrafos para mejor legibilidad
    marginBottom: 10,
  },
});


export default EmpresaScreen;
