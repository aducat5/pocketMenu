import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";

import Tabs from "./components/Tabs.js";
// import FancyTabs from "./components/FancyTabs.js";

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs style={styles}></Tabs>
        {/* <FancyTabs></FancyTabs> */}
      </NavigationContainer>
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
