import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Importa o componente de menu personalizado e as opções de estilo do Drawer
import CustomDrawerContent, { drawerScreenOptions } from './src/components/CustomDrawerContent';

// Cria os navegadores Stack e Drawer
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componente que define a navegação via Drawer (menu lateral)
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Componente de menu personalizado
      screenOptions={drawerScreenOptions()} // Estilo e comportamento das telas do Drawer
    >
      {/* Telas acessíveis através do menu lateral */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Componente principal do app que define a navegação geral
export default function App() {
  return (
    <NavigationContainer>
      {/* Stack Navigator para navegação em sequência (login -> app principal) */}
      <Stack.Navigator initialRouteName="Login">

        {/* Tela de Login (inicial), sem exibir o cabeçalho */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Tela principal após login: abre o Drawer Navigator, também sem cabeçalho */}
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}