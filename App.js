import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";

import Tabs from "./components/Tabs.js";

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs style={styles}></Tabs>
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
  }
});
