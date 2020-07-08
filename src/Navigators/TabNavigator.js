import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import MenuHistory from "../../views/MenuHistory";
import ScannerScreen from "../../views/ScannerScreen";
import { MapScreen } from "../../views/MapScreen";
import Menu from "../../views/Menu";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="History" component={MenuHistory} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

const Tabs = (props) => {
  return (
    <Tab.Navigator
      initialRouteName={MenuHistory}
      barStyle={{
        backgroundColor: "#FFFFFF",
        height: 70,
        justifyContent: "center",
      }}
      activeColor="#FF5733"
      inactiveColor="#FFFFFF"
    >
      <Tab.Screen
        name="History"
        component={MenuStack}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-list" size={24} color="#FF5733" />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-qr-scanner" size={24} color="#FF5733" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="md-map" size={24} color="#FF5733" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <Tabs></Tabs>
  </NavigationContainer>
);

export default AppNavigator;
