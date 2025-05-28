import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/fundoTela.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            color="rgb(50, 70, 30)"
          />
        </View>

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    backgroundColor: 'rgb(50, 70, 30)',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
    overflow: 'hidden', 
  },
});