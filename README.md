# 🌿 App de PAM com Drawer - React Native

Este é um aplicativo React Native com as seguintes funcionalidades:

- Tela de Login com validação.
- Manutenção de sessão (usuário permanece logado mesmo após fechar o app).
- Navegação usando Stack e Drawer (menu lateral).
- Tela de Logout que remove a sessão.
- Estilo personalizado no Drawer (menu lateral).
- Background com imagem e estilo visual agradável.

---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [Expo](https://expo.dev/) 


---

## 🧠 Como funciona

### 🔐 Login

- A tela `LoginScreen.js` verifica se o usuário está logado usando o `AsyncStorage`.
- Se o login for "Admin" e a senha for "1234", a sessão é salva e o usuário é redirecionado para a tela principal.
- Caso contrário, uma mensagem de erro é exibida.

### 🧭 Navegação

- O app usa `Stack.Navigator` para alternar entre a tela de login (`Login`) e a principal (`Main`).
- `Main` carrega o `DrawerNavigator`, que exibe o menu lateral com acesso às telas:
  - Home
  - Details
  - Profile

### 📤 Logout

- No menu lateral (`CustomDrawerContent.js`), há um botão **"Sair"**.
- Esse botão remove a chave `"isLoggedIn"` do `AsyncStorage` e redireciona para a tela de login.

---

## ▶️ Como executar

1. Clone o repositório:
   ```
   git clone https://github.com/LuisTorres2009/MeuAppdeNavegacao
   npm install
   ```

2. Execute:
   ```
   npx expo start --tunnel
   
   ```

---

Copyright @Luis Ricardo
