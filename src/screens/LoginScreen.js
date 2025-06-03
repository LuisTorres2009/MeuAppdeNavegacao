import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  // Estados para armazenar login, senha e controle de erro
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  // Verifica se o usuário já está logado quando a tela é carregada
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (loggedIn === 'true') {
        navigation.replace('Main'); // Redireciona para a tela principal se estiver logado
      }
    };
    checkLoginStatus();
  }, []);

  // Função que trata o processo de login
  const handleLogin = async () => {
    // Valida login e senha
    if (login === 'Admin' && senha === '1234') {
      setErrorVisible(false); // Esconde mensagem de erro
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true)); // Marca o usuário como logado
      navigation.replace('Main'); // Navega para a tela principal
    } else {
      setErrorVisible(true); // Mostra mensagem de erro
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/floresta.jpg')} // Imagem de fundo da tela
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}> {/* Camada para escurecer a imagem */}
        <View style={styles.container}> {/* Container principal do formulário */}
          <Text style={styles.title}>Login</Text> {/* Título da tela */}

          {/* Campo para entrada do login */}
          <TextInput
            style={styles.input}
            placeholder="Login"
            value={login}
            onChangeText={setLogin}
            placeholderTextColor="#333"
          />

          {/* Campo para entrada da senha */}
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholderTextColor="#333"
          />

          {/* Exibe mensagem de erro caso login/senha estejam incorretos */}
          {errorVisible && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>Login ou senha incorretos</Text>
            </View>
          )}

          <View style={styles.buttonContainer}> {/* Botão para realizar login */}
            <Button
              title="Entrar"
              onPress={handleLogin}
              color="rgb(51, 59, 37)"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Estilo que faz o componente ocupar toda a tela disponível
  background: {
    flex: 1,
  },

  // Cria uma camada escura na frente sobre a imagem de fundo
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Personaliza o container principal do conteúdo
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    width: windowWidth * 0.85,
  },

  // Personaliza o estilo do título
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    alignSelf: 'center',
    color: 'rgb(178, 184, 180)',
  },

  // Personaliza os campos de entrada de texto 
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(209, 231, 215, 0.8)',
    borderRadius: 5,
    color: '#000',
  },

  // Personaliza a caixa para mensagem de erro
  errorBox: {
    backgroundColor: 'rgb(51, 59, 37)',
    borderColor: 'rgb(86, 97, 75)',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  // Personaliza o texto de erro
  errorText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },

  // Personaliza o container do botão
  buttonContainer: {
    width: '60%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});