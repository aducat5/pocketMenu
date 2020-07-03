import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default App;
