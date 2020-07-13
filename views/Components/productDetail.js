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
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontSize: 13 }}>{description}</Text>
        </View>
      ) : (
        <ImageBackground
          style={style.productImage}
          source={{ uri: imageUrl }}
          resizeMode={"cover"}
        >
          <View
            style={[style.ProductDetailContainer, {
              flex: desciptionHeight}]}
          >
            <Text style={{ fontSize: 13 }}>
              {description}
            </Text>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  productImage: {
    borderRadius: 15,
    flex: 1,
    justifyContent: "flex-end",
    maxWidth:"100%",
    height:230
  },
  ProductDetailContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    opacity: 0.65,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    // paddingVertical:10,
    paddingBottom: 15
  }
});
