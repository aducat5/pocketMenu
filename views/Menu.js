import React from 'react';
import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, SectionList, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Menu(props) {
  var menuId = props.route.params.menuId;

  var DATA = {
    restourantId: "1",
    restourantName: "First Restourant",
    menus: [
      {
        title: "Main dishes",
        data: [
          {
            productName: "Pizza",
            desciption: "Açıklama açıklama lorem ipsuaçıklama lorem ipsum. Açıklama açıklama lorem ipsum..length / 40.length / 40",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/pizza.jpg",
            detailVisible: false
          },
          {
            productName: "Burger",
            desciption: "Açıklama açıklama lorem ipsum.Açıklama açıklama lorem ipsuaçıklama lorem ipsum. Açıklama açıklama lorem ipsum..length / 40.length / 40Açıklama açıklama Açıklama açıklama lorem ipsuaçıklama lorem ipsum. Açıklama açıklama lorem ipsum..length / 40.length / 40",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/steak.jpg",
            detailVisible: false
          },
          {
            productName: "Risotto",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/steak.jpg",
            detailVisible: false
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
            imageUrl: "http://omercan.net/pocketMenuAssets/tart.jpg",
            detailVisible: false
          },
          {
            productName: "Ice Cream",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/tart.jpg",
            detailVisible: false
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
            imageUrl: "",
            detailVisible: false
          },
          {
            productName: "Onion Rings",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/drink.jpg",
            detailVisible: false
          },
          {
            productName: "Fried Shrimps",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "",
            detailVisible: false
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
            imageUrl: "http://omercan.net/pocketMenuAssets/drink.jpg",
            detailVisible: false
          },
          {
            productName: "Coke",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "",
            detailVisible: false
          },
          {
            productName: "Beer",
            desciption: "Açıklama açıklama lorem ipsum.",
            price: "25₺",
            imageUrl: "http://omercan.net/pocketMenuAssets/drink.jpg",
            detailVisible: false
          },
        ]
      }
    ]
  };

  // let imageUrls = [];

  // DATA.menus.forEach(function (menu) {
  //   // console.log(menu);
  //   menu.data.forEach(function (product) {
  //     if(product.imageUrl != ""){
  //       Image.prefetch(product.imageUrl);
  //     }
  //   });
  // });  

  const [menuData, setMenuData] = useState(DATA);
  const [refresh, setRefresh] = useState(false);

  function productOnPress(product) {
    product.detailVisible = !product.detailVisible;
    setMenuData(menuData);
    setRefresh(!refresh);
  }

  const SeeDetailIcon = function ( {detailVisible} ) {
    let iconName = "ios-arrow-forward";
    let iconColor = "#FF5733"
    if (detailVisible) {
      iconName = "ios-arrow-down";
      iconColor = "#373737";
    }
  
    return (<Ionicons name={iconName} size={24} color={iconColor} />)
  }

  const ProductDetail = function ( {item} ) {
    if(item.detailVisible){
      if(item.imageUrl != ""){
        let lineCount = Math.round(item.desciption.length / 40);
        let desciptionHeight = lineCount * 0.10;
        if (desciptionHeight < 0.2) desciptionHeight = 0.2
        console.log(lineCount);
        return (
          <View>
            <View>
              <ImageBackground style={style.productImage} source={{uri: item.imageUrl}} resizeMode={'contain'}>
                <View
                  style={{
                    backgroundColor:"white",
                    flex: desciptionHeight,
                    justifyContent:"center",
                    opacity: 0.65,
                    paddingLeft: 15,
                    // borderTopLeftRadius: 15,
                    borderTopRightRadius: 30
                  }}
                >
                  {/* <Text>{item.productName}</Text> */}
                  <Text style={{fontSize: 14, marginBottom: 10}}>{item.desciption}</Text>
                  <Text style={{fontSize: 14}}>{item.price}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          )
      }else{
        return(
          <View>
            <Text>{item.productName}</Text>
            <Text>{item.desciption}</Text>
            <Text>{item.price}</Text>
          </View>
        )
      }
    }

    return (<View></View>)
  }
    
  const SectionHeader = ({ title }) => (
    <View style={style.sectionHeader}>
      <Text style={style.sectionText} >{title}</Text>
    </View>
  );
  
  const Product = ({ item, onPress }) => (
    <View>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={style.product}>
          <View style={style.productText}>
            <View style={{flexDirection:"row"}}>
              <Text style={style.productName}>{item.productName}</Text>
            </View>
            <Text style={style.productPrice} >{item.price}</Text>
          </View>
          <View style={{flex:0.5}} >
            <SeeDetailIcon detailVisible={item.detailVisible} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => onPress(item)}>
        <ProductDetail item={item} />
      </TouchableWithoutFeedback>
    </View>
  );
  
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={{borderBottomWidth: 2, borderBottomColor: "#E5E5E5", marginVertical:10}}>
          <Text style={{fontSize: 22, marginBottom:10}}>{menuData.restourantName}</Text>
        </View>
        <SectionList
          sections={menuData.menus}
          extraData={refresh}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Product item={item} onPress={productOnPress} />}
          renderSectionHeader={({ section: { title } }) => ( <SectionHeader title={title} /> )}
        />
      </SafeAreaView>
    </View>
    );
}

const style = StyleSheet.create({
  container:{
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
    marginVertical: 10,
    borderBottomColor: "#FF5733",
    borderBottomWidth: 2,
    borderRadius: 5
  },
  sectionText: {
    marginLeft: 5,
    fontSize: 20
  },
  productImage:{
    width: '100%', 
    height:  325,
    // height: 310,
    borderRadius: 15,
    flex:1,
    justifyContent:"flex-end",
    // flexDirection:"column",
  }
  
});
    
export default Menu;