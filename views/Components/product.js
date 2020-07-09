import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ProductDetail } from "./productDetail";
import { Ionicons } from "@expo/vector-icons";

const SeeDetailIcon = ({ detailVisible, accentColor }) => {
  let iconName = "ios-arrow-forward";
  let iconColor = accentColor;
  if (detailVisible) {
    iconName = "ios-arrow-down";
    iconColor = "#373737";
  }
  return <Ionicons name={iconName} size={24} color={iconColor} />;
};
export const Product = ({ item, accentColor }) => {
  const { productName = "", price = "" } = item || {};
  const [isVisible, setisVisible] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setisVisible(!isVisible);
        }}
      >
        <View style={style.product}>
          <View style={style.productText}>
            <View style={{ flexDirection: "row" }}>
              <Text style={style.productName}>{productName}</Text>
            </View>
            <Text style={style.productPrice}>{price}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <SeeDetailIcon
              detailVisible={isVisible}
              accentColor={accentColor}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isVisible && <ProductDetail item={item} />}
    </View>
  );
};

const style = StyleSheet.create({
  product: {
    flex: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // height:70,
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
    backgroundColor: "#EEEEEE",
    paddingVertical: 15,
  },
  productText: {
    marginLeft: 10,
    justifyContent: "space-between",
    flex: 4,
  },
  productName: {
    fontSize: 13,
    color: "#373737",
    width: "95%",
  },
  productPrice: {
    fontSize: 10,
    color: "#4F4F4F",
    width: "95%",
  },
});
