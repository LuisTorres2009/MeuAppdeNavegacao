import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/fundoTela.jpg')} // caminho da imagem de fundo da tela
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}> {/* Container principal do conteúdo da tela */}
        <Text style={styles.title}>Home Screen</Text> {/* Título da tela */}

        <View style={styles.buttonContainer}> {/* Container do botão "Go to Details" */}
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')} // Navega para a tela Details
            color="rgb(50, 70, 30)"
          />
        </View>

        <View style={styles.buttonContainer}> {/* Container do botão "Go to Profile" */}
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
  // Estilo do fundo da tela
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Container principal da tela, que envolve o conteúdo
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Estilo do título principal da tela
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  // Estilo do container dos botões
  buttonContainer: {
    backgroundColor: 'rgba(50, 70, 30, 0.8)', // verde oliva translúcido
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});