import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import Constants from "expo-constants";

import EmptyPage from "../components/EmptyPage";

const ListItem = ({ item, onListItemHandler }) => {
  const { id, name = "", date = "" } = item || {};
  return (
    <TouchableHighlight
      activeOpacity={0.95}
      underlayColor="#FF5733"
      onPress={() => onListItemHandler(id)}
    >
      <View style={style.listItem}>
        <View style={style.listItemText}>
          <Text style={{ flex: 0.6, color: "#373737" }}>{name}</Text>
          <Text style={{ fontSize: 10, color: "#4F4F4F" }}>{date}</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward"
          size={24}
          color="#FF5733"
          style={style.listItemArrow}
        />
      </View>
    </TouchableHighlight>
  );
};

const MenuHistory = (props) => {
  const { navigation } = props || {};

  const [isLoading, setIsLoading] = useState(true);
  const [lastScans, setLastScans] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let _lastScans = await AsyncStorage.getItem("menuHistory");
      console.log(_lastScans);
      setLastScans(JSON.parse(_lastScans));
      setIsLoading(false);
    };
    getData();
  }, []);

  var getMenuData = function (menuId, onSuccess, onFailure) {
    var localPromise = fetch("https://pma.ist/api/seller", {
      method: "POST",
      headers: {
        Authorization:
          "Basic SEFSRENPREVEVU5BTUVGVFdNRlM6aGFyZGNvZGVkcHdkc2Z0d21mcw==",
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(menuId),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });

    localPromise.then(
      function (result) {
        if (result.SellerName != null) {
          var DATA = {
            restourantName: result.SellerName,
            accentColor: JSON.parse(result.SellerJSON).accentColor,
            menus: [],
          };

          result.Data.forEach((menu) => {
            menu = JSON.parse(menu);
            DATA.menus.push(menu);
          });

          if (onSuccess) onSuccess(DATA);
        } else {
          if (onFailure != null) onFailure(result.Result);
        }
      },
      function (error) {
        if (onFailure != null) onFailure(error);
      }
    );
  };

  const onListItemHandler = (menuId) => {
    console.log("menuId", menuId);
    getMenuData(menuId, function (menuData) {
      navigation.navigate("Menu", { menuData: menuData });
    });
    // navigation.navigate("Menu", {menuId : menuId});
  };

  if (isLoading) {
    return (
      <View style={style.container}>
        <View
          style={{
            // padding:20,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator color="#FF5733" size="large" />
          <Text style={{ textAlign: "center" }}>
            Getting last menus you have scanned...
          </Text>
        </View>
      </View>
    );
  }

  if (lastScans && lastScans.length > 0) {
    return (
      <View style={style.container}>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#FF5733" }}>
          <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
            Last Scanned Menus
          </Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={lastScans}
            renderItem={({ item }) => (
              <ListItem item={item} onListItemHandler={onListItemHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  } else {
    return (
      <EmptyPage
        title="Nothing To Show Here"
        detail="Since you have not scanned any menu yet, we couldn't find last scanned menus to show you."
        iconname="ios-leaf"
        iconclor="#EAEAEA"
      />
    );
  }
};

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 10,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // height:60,
    paddingVertical: 15,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    backgroundColor: "#EEEEEE",
  },
  listItemText: {
    flex: 4.5,
    marginLeft: 30,
    flexDirection: "column",
  },
  listItemArrow: {
    flex: 0.5,
  },
});

export default MenuHistory;
