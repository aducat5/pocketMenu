import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { MenuList } from "./Components";

const Menu = (props) => {
  const {
    params: { menuData: DATA = [] },
  } = props.route || {};
  const { restourantName = "" } = DATA || {};
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.content}>
          <Text style={{ fontSize: 28 }}>{restourantName}</Text>
        </View>
        {DATA && <MenuList data={DATA} />}
      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  content: {
    marginVertical: 15,
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 2,
    borderRadius: 5,
  },
});

export default Menu;
