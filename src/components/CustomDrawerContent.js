import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function drawerScreenOptions() {
  return {
    headerStyle: {
      backgroundColor: 'rgb(51, 59, 37)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    drawerStyle: {
      backgroundColor: 'rgb(51, 59, 37)',
    },
    drawerLabelStyle: {
      color: '#fff',
      fontWeight: 'bold',
    },
    drawerActiveBackgroundColor: 'rgb(33, 41, 21)',
    drawerInactiveBackgroundColor: 'rgb(33, 41, 21)',
    drawerActiveTintColor: '#fff',
    drawerInactiveTintColor: '#fff',
  };
}

export default function CustomDrawerContent(props) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userLoggedIn');
    props.navigation.replace('Login');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo</Text>
        <Text style={styles.adminText}>Admin</Text>
      </View>

      <View style={styles.listContainer}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;
          const { drawerLabel } = props.descriptors[route.key].options;

          return (
            <View key={route.key} style={styles.drawerItemWrapper}>
              <DrawerItem
                label={drawerLabel ?? route.name}
                focused={isFocused}
                onPress={() => props.navigation.navigate(route.name)}
                labelStyle={styles.drawerLabel}
                style={styles.drawerItem}
                activeBackgroundColor="rgb(33, 41, 21)"
                inactiveBackgroundColor="rgb(33, 41, 21)"
                activeTintColor="#fff"
                inactiveTintColor="#fff"
              />
            </View>
          );
        })}
      </View>

      <DrawerItem
        label="Sair"
        onPress={handleLogout}
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: 'rgb(51, 59, 37)',
  },
  header: {
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  adminText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
  },
  drawerItemWrapper: {
    marginBottom: 10,
  },
  drawerItem: {
    backgroundColor: 'rgb(33, 41, 21)',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  drawerLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});