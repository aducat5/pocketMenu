import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lastScans = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    retourantName: 'First Restourant',
    menuName: "First Menu"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    retourantName: 'Second Restourant',
    menuName: "Second Menu"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    retourantName: 'Third Restourant',
    menuName: "Third Menu"
  },
];

var listItemClick = function(item){
  console.log(item);
};

function ListItem({ item }){
  return (
    <View style={style.listItem}>
      {/* <Button title={title} onPress={listItemClick} /> */}
      <Text style={style.listItemText}>{item.retourantName + ' - ' + item.menuName}</Text>
      <Ionicons name="ios-arrow-forward" size={24} color="black" style={style.listItemArrow} />
    </View>
  );
}

function MenuHistory() {
  return (
    <View style={style.container}>
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

const style = StyleSheet.create({
  container:{
    marginTop:20
  },
  listItem: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:60,
    marginTop:15,
    backgroundColor:"#E5E5E5"
  },
  listItemText: {
    flex:5,
    color:"black",
    marginLeft:30
  },
  listItemArrow:{
    flex:0.5,
    // alignSelf:"flex-end"
  }
});
  
export default MenuHistory;

