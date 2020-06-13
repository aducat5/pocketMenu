import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
// import { createStackNavigator,  } from '@react-navigation/stack';

import Tabs from "./components/Tabs.js";
import Menu from "./views/Menu.js";

// const Stack = createStackNavigator();

function App() {
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs style={styles}></Tabs>      
      </NavigationContainer>
      {/* <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={Menu}
          />
        </Stack.Navigator>  
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
    // justifyContent:"space-between"
  }
});

export default App;
