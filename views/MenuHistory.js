import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lastScans = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    retourantName: 'First Restourant',
    menuName: "Taksim - 5 January 2020"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    retourantName: 'Second Restourant',
    menuName: "Kadıköy - 15 November 2019"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    retourantName: 'Third Restourant',
    menuName: "Tuzla - 23 April 2020 "
  },
];

var listItemClick = function(item){
  console.log(item);
};

function ListItem({ item }){
  return (
    <View style={style.listItem}>
      {/* <Button title={title} onPress={listItemClick} /> */}
      <View style={style.listItemText}>
        <Text style={{flex:0.6, color:"#373737"}}>{item.retourantName}</Text>
        <Text style={{fontSize:10, color:"#4F4F4F"}}>{item.menuName}</Text>
      </View>
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
    marginTop:25
  },
  listItem: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height:60,
    // marginTop:15,
    borderBottomColor:"#E5E5E5",
    borderBottomWidth:1,
    backgroundColor:"#EEEEEE"
  },
  listItemText: {
    flex:5,
    // color:"black",
    marginLeft:30,
    flexDirection:"column"
  },
  listItemArrow:{
    flex:0.5,
    // alignSelf:"flex-end"
  }
});
  
export default MenuHistory;

