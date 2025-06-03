import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
  return (
    // Imagem de fundo ocupando toda a tela
    <ImageBackground
      source={require('../../assets/fundoTela.jpg')} // Caminho da imagem de fundo
      style={styles.background}
      resizeMode="cover"
    >
      {/* Container centralizado com o conteúdo da tela */}
      <View style={styles.container}>
        {/* Título da tela */}
        <Text style={styles.title}>Profile Screen</Text>

        {/* Botão para navegar até a tela Home */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            color="rgb(50, 70, 30)" 
          />
        </View>

        {/* Botão para voltar à tela anterior */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
            color="rgb(50, 70, 30)"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

// Estilos utilizados na tela
const styles = StyleSheet.create({
  // Estilo da imagem de fundo que cobre a tela inteira
  background: {
    flex: 1,
  },

  // Container principal centralizado na tela
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },

  // Estilo do título da tela
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  // Estilo dos botões
  buttonContainer: {
    backgroundColor: 'rgb(50, 70, 30)',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});