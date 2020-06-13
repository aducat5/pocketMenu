import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, SectionList } from 'react-native';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
      title: "Main dishes",
      data: [
        {
          productName: "Pizza",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Burger",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Risotto",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
      ]
    },
    {
      title: "Desserts",
      data: [
        {
          productName: "Cheese Cake",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Ice Cream",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        }
      ]
    },
    {
      title: "Sides",
      data: [
        {
          productName: "French Fries",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Onion Rings",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Fried Shrimps",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
      ]
    },
    {
      title: "Drinks",
      data: [
        {
          productName: "Water",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Coke",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
        {
          productName: "Beer",
          desciption: "Açıklama açıklama lorem ipsum.",
          price: "25₺",
          imageUrl: "urlToImage"
        },
      ]
    }
  ];

  const Product = ({ name, desciption, price, image }) => (
    <View style={style.product}>
      <View style={style.productText}>
        <View style={{flexDirection:"row"}}>
          <Text style={style.productName}>{name}</Text>
          <Text style={{marginLeft: 15, fontSize: 12, marginTop: 4}} >{price}</Text>
        </View>
        <Text style={style.productPrice}>{desciption}</Text>
      </View>
      <View style={{flex:0.5}} >
      <Ionicons name="md-images" size={24} color="#FF5733" />
      </View>
    </View>
  );
  
  const SectionHeader = ({ title }) => (
    <View style={style.sectionHeader}>
      <Text style={style.sectionText} >{title}</Text>
    </View>
  );

  function Menu(props) {
    var menuId = props.route.params.menuId;
    return (
      <View style={style.container}>
        <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Product name={item.productName} price={item.price} image={item.image} desciption={item.desciption} />}
          renderSectionHeader={({ section: { title } }) => ( <SectionHeader title={title} /> )}
        />
        </SafeAreaView>
      </View>
      );
  }

  const style = StyleSheet.create({
    container:{
      marginTop:25,
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16
    },
    product: {
      flex:6,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
      height:60,
      borderTopColor:"#E5E5E5",
      borderTopWidth:1,
      backgroundColor:"#EEEEEE"
    },
    productText: {
      marginLeft: 10,
      justifyContent:"space-between",
      flex:4
    },
    productName: {
      fontSize: 16,
      color:"#373737"
    },
    productPrice: {
      fontSize: 12,
      color:"#4F4F4F"
      
    },
    sectionHeader: {
      fontSize: 23,
      marginVertical: 10,
      borderBottomColor: "#FF5733",
      borderBottomWidth: 2,
      borderRadius: 5
    },
    sectionText: {
      marginLeft: 5,
      fontSize: 20
    }
  });
    
  export default Menu;