import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MenuHistory from "../views/MenuHistory.js";
import ScannerScreen from "../views/ScannerScreen.js";
import MapScreen from "../views/MapScreen.js";

const Tab = createMaterialBottomTabNavigator();

function Tabs(props) {
  return (
    <Tab.Navigator
     initialRouteName={MenuHistory} 
     barStyle={{
         backgroundColor:"#FF5733",
         height:70,
         justifyContent:"center"
        }}
     activeColor="white"
     inactiveColor="#FF5733"
     >
      <Tab.Screen 
      name="History" 
      component={MenuHistory} 
      options={{
          tabBarIcon: () => (<Ionicons name="ios-list" size={24} color="white" />)
      }} />
      <Tab.Screen name="Scanner" component={ScannerScreen} options={{
          tabBarIcon: () => (<Ionicons name="md-qr-scanner" size={24} color="white" />)
      }} />
      <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarIcon: () => (<Ionicons name="md-map" size={24} color="white" />)
      }}  />
    </Tab.Navigator>
  );
}

export default Tabs;