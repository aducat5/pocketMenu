import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./views/HomeScreen.js";
import MenuHistory from "./views/MenuHistory.js";

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{title:"Home"}}>
          {props => <HomeScreen {...props} style={styles}></HomeScreen>}
        </Stack.Screen>
          <Stack.Screen name="History" options={{title :"Last Menus"}}>
            {props => <MenuHistory {...props} style={styles}></MenuHistory>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
    // justifyContent:"space-between"
  },
  header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
    backgroundColor: "azure"
    // borderColor:"azure",
    // borderWidth: 2
  },
  footer:{
    flex:0.5,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor: "lightgreen"
  },
  content:{
    flex:4,
    justifyContent:"center",
    alignItems:"center",
    // marginBottom: 30,
    // borderColor:"lightgreen",
    // borderWidth: 2
    backgroundColor: "papayawhip"
  },
  footerButton:{
    marginRight:20
  }
});
