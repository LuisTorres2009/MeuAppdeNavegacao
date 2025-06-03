import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função que retorna opções de estilo e configuração para o drawer e header da navegação
export function drawerScreenOptions() {
  return {
    headerStyle: {
      backgroundColor: 'rgb(51, 59, 37)', // Cor de fundo do cabeçalho
    },
    headerTintColor: '#fff', // Cor dos ícones e texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // Deixa o título do cabeçalho em negrito
    },
    drawerStyle: {
      backgroundColor: 'rgb(51, 59, 37)', // Cor de fundo do menu drawer
    },
    drawerLabelStyle: {
      color: '#fff', // Cor do texto dos itens do drawer
      fontWeight: 'bold', // Texto em negrito
    },
    drawerActiveBackgroundColor: 'rgb(33, 41, 21)', 
    drawerInactiveBackgroundColor: 'rgb(33, 41, 21)', 
    drawerActiveTintColor: '#fff', 
    drawerInactiveTintColor: '#fff',
  };
}

// Componente que renderiza o conteúdo personalizado do drawer
export default function CustomDrawerContent(props) {
  // Função para realizar logout: remove 'isLoggedIn' e redireciona para a tela de Login
  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn'); 
    props.navigation.replace('Login'); // Substitui a tela atual pela tela Login
  };


  return (
    // Container com scroll para o conteúdo do drawer, passando estilos personalizados
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>

      {/* Cabeçalho do drawer com texto de boas-vindas e indicação de usuário Admin */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo</Text>
        <Text style={styles.adminText}>Admin</Text>
      </View>

      {/* Lista de itens do drawer baseada nas rotas da navegação */}
      <View style={styles.listContainer}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index; // Verifica se o item está ativo (selecionado)
          const { drawerLabel } = props.descriptors[route.key].options; // Pega o label do item no drawer

          return (
            // Cada item do drawer envolve o DrawerItem dentro de uma View para estilização extra
            <View key={route.key} style={styles.drawerItemWrapper}>
              <DrawerItem
                label={drawerLabel ?? route.name} // Usa o label customizado ou o nome da rota
                focused={isFocused} // Define se o item está selecionado
                onPress={() => props.navigation.navigate(route.name)} // Navega para a rota ao clicar
                labelStyle={styles.drawerLabel} // Estilo do texto do item
                style={styles.drawerItem} // Estilo do item (fundo, bordas)
                activeBackgroundColor="rgb(33, 41, 21)" 
                inactiveBackgroundColor="rgb(33, 41, 21)" 
                activeTintColor="#fff" 
                inactiveTintColor="#fff" 
              />
            </View>
          );
        })}
      </View>

      {/* Item extra no drawer para sair (logout), chama handleLogout */}
      <DrawerItem
        label="Sair"
        onPress={handleLogout}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
}

// Estilos usados no componente e elementos do drawer
const styles = StyleSheet.create({
  // Estilo do container principal do drawer (menu lateral)
  drawerContainer: {
    flex: 1,
    backgroundColor: 'rgb(51, 59, 37)',
  },
  // Estilo do cabeçalho do drawer, que contém textos de boas-vindas
  header: {
    padding: 20,
    justifyContent: 'center',
  },
  // Estilo do texto principal de boas-vindas
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Estilo do texto que indica "Admin"
  adminText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  // Container que envolve a lista de itens do drawer
  listContainer: {
    flex: 1,
    paddingTop: 10,
  },
  // Wrapper que adiciona espaçamento entre cada item do drawer
  drawerItemWrapper: {
    marginBottom: 10,
  },
  // Estilo dos itens do drawer (botões do menu lateral)
  drawerItem: {
    backgroundColor: 'rgb(33, 41, 21)',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  // Estilo dos textos (labels) dos itens do drawer
  drawerLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});