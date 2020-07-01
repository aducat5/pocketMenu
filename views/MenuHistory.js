import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Constants from "expo-constants";

import Menu from "./Menu.js";

const style = StyleSheet.create({
  container:{
      marginTop: Constants.statusBarHeight + 10,
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

const lastScans = [
  {
    id: '1',
    retourantName: 'First Restourant',
    location: "Taksim",
    date: "5 January 2020"
  },
  {
    id: '2',
    retourantName: 'Second Restourant',
    location: "Kadıköy",
    date: "15 November 2019"
  },
  {
    id: '3',
    retourantName: 'Third Restourant',
    location: "Tuzla",
    date: "23 April 2020"
  },
];

var navigation = null;

function ListItem({ item }){
  return (
    <TouchableHighlight
      activeOpacity={0.95}
      underlayColor="#FF5733"
      onPress={() => onListItemHandler(item.id)}
    >
      <View style={style.listItem}>
        <View style={style.listItemText}>
          <Text style={{flex:0.6, color:"#373737"}}>{item.retourantName}</Text>
          <Text style={{fontSize:10, color:"#4F4F4F"}}>{item.location} - {item.date}</Text>
        </View>
        <Ionicons name="ios-arrow-forward" size={24} color="#FF5733" style={style.listItemArrow} />
      </View>
    </TouchableHighlight>
  );
}

function onListItemHandler(menuId){
  navigation.navigate("Menu", {menuId : menuId});
}

function MenuHistory(props) {
  navigation = props.navigation;
  return (
    <View style={style.container}>
      <View style={{borderBottomWidth: 2, borderBottomColor: "#FF5733"}}>
        <Text style={{fontSize: 20, marginLeft:20, marginBottom:10}}>Last Scanned Menus</Text>
      </View>
      <SafeAreaView>
        <FlatList
        data={lastScans}
        renderItem={({item}) => (<ListItem item={item} />)}
        keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
    );
}

  
export default MenuHistory;

