import React from "react";
import { SectionList } from "react-native";
import { SectionHeader } from "./sectionHeader";
import { Product } from "./product";

export const MenuList = ({ data }) => {
  const { accentColor } = data || {};
  return (
    <SectionList
      sections={data.menus}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Product item={item} accentColor={accentColor} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} accentColor={accentColor} />
      )}
    />
  );
};
