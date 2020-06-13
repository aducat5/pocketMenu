import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  function Menu(props) {
    return (
      <View style={style.container}>
        <SafeAreaView>
          <Text>Selam</Text>
        </SafeAreaView>
      </View>
      );
  }

  const style = StyleSheet.create({
    container:{
      marginTop:25
    },
    listItem: {
      flex:1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      height:60,
      borderBottomColor:"#E5E5E5",
      borderBottomWidth:1,
      backgroundColor:"#EEEEEE"
    },
    listItemText: {
      flex:4.5,
      marginLeft:30,
      flexDirection:"column"
    },
    listItemArrow:{
      flex:0.5,
    }
  });
    
  export default Menu;