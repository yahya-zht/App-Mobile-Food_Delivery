import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Order from "../screens/Order";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import FoodDetails from "../screens/FoodDetails";

export default function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          // animation: "none",
          // animationTypeForReplace: "pop",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
