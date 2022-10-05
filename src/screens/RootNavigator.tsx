import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Auth } from "./auth/Auth";
import { DrawerNavigation } from "./main/DrawerNavigation";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Auth"}
    >
      <Stack.Screen component={Auth} name="Auth" />
      <Stack.Screen component={DrawerNavigation} name="Home" />
    </Stack.Navigator>
  );
};
