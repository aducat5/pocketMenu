import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SectionHeader = ({ title, accentColor }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        borderBottomColor: accentColor,
        borderBottomWidth: 2,
        borderRadius: 5,
      }}
    >
      <Text style={(style.sectionText, { marginBottom: 5 })}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  sectionText: {
    marginLeft: 5,
    fontSize: 17,
  },
});
