import React from 'react';
import { ScrollView, Text, View, Image, StatusBar, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: 1,
    name: 'Adidas Originals California Mens T-Shirt Trefoil Retro 3-Stripes Short Sleeve',
    description: 'Camiseta de algodón cómoda para uso diario.',
    price: '$378.75',
    category: 'Tops',
    brand: 'Adidas',
    image: require('../../assets/camisas.jpg'),
  },
  {
    id: 2,
    name: 'Jeans de corte straight Mujer',
    description: 'Vaqueros de mezclilla clásicos para un look casual.',
    price: '$1,253.00',
    category: 'Bottoms',
    brand: 'GUESS',
    image: require('../../assets/Guess.jpg'),
  },
  {
    id: 3,
    name: 'Pantalones Cortos De Mezclilla Elásticos Para Mujer',
    description: 'Debido a los diferentes entornos de luz, ¡ la ropa produce diferentes colores!!.',
    price: '$193',
    category: 'Bottoms',
    brand: 'Tutu',
    image: require('../../assets/Pantalones.png'),
  },
  {
    id: 4,
    name: 'Vestidos Para Mujer Vestidos Casuales Moda Encaje Jersey Sólido Erógeno Mini Vestido de Manga Corta',
    description: 'Moda Mujer Verano Encaje Casual Pullover Sólido Erógeno Manga corta Mini vestido',
    price: '$362.16',
    category: 'Bottoms',
    brand: 'Odeerbi',
    image: require('../../assets/Vestido.png'),
  },
  // Agrega más productos si es necesario
];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
      <View style={{ height: 22 }}></View>
      <Text style={styles.title}>Bienvenido a nuestra tienda de ropa</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productCategory}>Categoría: {product.category}</Text>
          <Text style={styles.productBrand}>Marca: {product.brand}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>Precio: {product.price}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    bbackgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCategory: {
    marginBottom: 5,
  },
  productBrand: {
    marginBottom: 5,
  },
  productDescription: {
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10, // Ajusta según sea necesario
    left: 10, // Ajusta según sea necesario
    zIndex: 10,
  },
});

export default HomeScreen;
