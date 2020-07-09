import React from "react";
import { StyleSheet, View } from "react-native";

import AppNavigator from "./src/Navigators/TabNavigator";

function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
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
