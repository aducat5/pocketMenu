import React, { useState, useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { MenuList } from "./Components";
import { ActivityIndicator } from "react-native-paper";

const Menu = (props) => {
  const {
    params: { menuId }
  } = props.route || {};

  const [menuData, setMenuData] = useState({});
  const [isMenuLoading, setIsMenuLoading] = useState(false);

  useEffect(() => {
    setIsMenuLoading(true);
    getMenuData(menuId, function (data) {
      setMenuData(data);
      setIsMenuLoading(false);
    });
  }, [menuId]);

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
  
  // const {
  //   params: { menuData: DATA = [] },
  // } = props.route || {};
  // const { restourantName = "" } = DATA || {};
  if(isMenuLoading){
    return(<View style={{flex:1, alignItems:"center", justifyContent:"center"}}><ActivityIndicator /></View>);
  }else{
    return (
      <View style={style.container}>
        <SafeAreaView>
          <View style={style.content}>
            {menuData && 
            <Text style={{ fontSize: 28 }}>{menuData.restourantName}</Text>
            }
          </View>
          {menuData && <MenuList data={menuData} />}
        </SafeAreaView>
      </View>
    );
  }
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
