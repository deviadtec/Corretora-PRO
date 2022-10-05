/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { ReduxStore } from "@services/store";
import React, { useEffect } from "react";
import { BackHandler, LogBox, StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import { RootNavigator } from "./screens/RootNavigator";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5d5d5d",
    accent: "#f1c40f",
    placeholder: "grey",
    background: "white",
  },
};
const MyTheme = {
  dark: false,
  colors: {
    primary: "#5d5d5d",
    card: "rgb(255, 255, 255)",
    text: "white",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    background: "#000524",
  },
};
const App = () => {
  function backHandler() {
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={ReduxStore}>
      <PaperProvider
        theme={theme}
        settings={{ icon: (props) => <Icon {...props} /> }}
      >
        <NavigationContainer theme={MyTheme}>
          <AuthProvider>
            <RootNavigator />
          </AuthProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
