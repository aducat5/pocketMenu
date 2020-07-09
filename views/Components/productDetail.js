import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Constants from "expo-constants";

export const ProductDetail = ({ item, detailVisible }) => {
  const { imageUrl, description = "", price, productName } = item || {};
  let lineCount = Math.round(description.length / 40);
  let desciptionHeight = lineCount * 0.1;
  if (desciptionHeight < 0.2) desciptionHeight = 0.2;
  return (
    <View>
      {imageUrl === "" ? (
        <View
          style={{
            backgroundColor: "white",
            flex: desciptionHeight,
            justifyContent: "center",
            opacity: 0.65,
            paddingLeft: 15,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 30,
            paddingVertical: 15,
          }}
        >
          {/* <Text>{productName}</Text> */}
          <Text style={{ fontSize: 13, marginBottom: 10 }}>{description}</Text>
          <Text style={{ fontSize: 13 }}>{price}</Text>
        </View>
      ) : (
        <ImageBackground
          style={style.productImage}
          source={{ uri: imageUrl }}
          resizeMode={"contain"}
        >
          <View
            style={{
              backgroundColor: "white",
              flex: desciptionHeight,
              justifyContent: "center",
              opacity: 0.65,
              paddingLeft: 15,
              // borderTopLeftRadius: 15,
              borderTopRightRadius: 30,
            }}
          >
            <Text>{productName}</Text>
            <Text style={{ fontSize: 14, marginBottom: 10 }}>
              {description}
            </Text>
            <Text style={{ fontSize: 14 }}>{price}</Text>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
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
  sectionHeader: {
    marginVertical: 10,
    borderBottomColor: "#FF5733",
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  sectionText: {
    marginLeft: 5,
    fontSize: 17,
  },
  productImage: {
    width: "100%",
    height: 325,
    // height: 310,
    borderRadius: 15,
    flex: 1,
    justifyContent: "flex-end",
    // flexDirection:"column",
  },
});
