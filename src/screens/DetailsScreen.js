import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/fundoTela.jpg')}
      style={styles.background} // Aplica estilo personalizado para o fundo da tela
      resizeMode="cover" // Ajusta a imagem para cobrir todo o espaço disponível
    >
      <View style={styles.overlay}> {/* Container centralizador do conteúdo */}
        <Text style={styles.title}>Details Screen</Text> {/* Título da tela */}
        <View style={styles.buttonContainer}> {/* Container do botão */}
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')} // Navega para a tela Home
            color="rgb(50, 70, 30)"
          />
        </View>
        <View style={styles.buttonContainer}> {/* Container do segundo botão */}
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')} // Navega para a tela Profile
            color="rgb(50, 70, 30)"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Personaliza o fundo da tela
  background: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  // Container que sobrepõe a imagem de fundo e centraliza conteúdo
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
    width: '100%', 
  },
  // Estilo do título principal
  title: {
    fontSize: 24, 
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  // Estilização do container dos botões
  buttonContainer: {
    backgroundColor: 'rgb(50, 70, 30)',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});