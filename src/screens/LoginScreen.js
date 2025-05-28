import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

 const handleLogin = async () => {
  if (login === 'Admin' && senha === '1234') {
    setErrorVisible(false);
    await AsyncStorage.setItem('isLoggedIn', 'true');
    navigation.replace('Main');
  } else {
    setErrorVisible(true);
  }
};

  return (
    <ImageBackground
      source={require('../../assets/floresta.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Login"
            value={login}
            onChangeText={setLogin}
            placeholderTextColor="#333"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholderTextColor="#333"
          />

          {errorVisible && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>Login ou senha incorretos</Text>
            </View>
          )}

          <View style={styles.buttonContainer}>
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
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    width: windowWidth * 0.85,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'rgb(159, 175, 164)',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    alignSelf: 'center', 
  },
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
  errorText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});