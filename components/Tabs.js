import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator,  } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MenuHistory from "../views/MenuHistory.js";
import ScannerScreen from "../views/ScannerScreen.js";
import MapScreen from "../views/MapScreen.js";
import Menu from "../views/Menu.js";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MenuStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="History" component={MenuHistory} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

function Tabs(props) {
  return (
    <Tab.Navigator
     initialRouteName={MenuHistory} 
     barStyle={{
         backgroundColor:"#FFFFFF",
         height:70,
         justifyContent:"center"
        }}
     activeColor="#FF5733"
     inactiveColor="#FFFFFF"
     >
      <Tab.Screen 
      name="History" 
      component={MenuStack} 
      options={{
          tabBarIcon: () => (<Ionicons name="ios-list" size={24} color="#FF5733" />)
      }} />
      <Tab.Screen name="Scanner" component={ScannerScreen} options={{
          tabBarIcon: () => (<Ionicons name="md-qr-scanner" size={24} color="#FF5733" />)
      }} />
      <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarIcon: () => (<Ionicons name="md-map" size={24} color="#FF5733" />)
      }}  />
    </Tab.Navigator>
  );
}

export default Tabs;