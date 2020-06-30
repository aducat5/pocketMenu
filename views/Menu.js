import React from 'react';
import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, SectionList, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Menu(props) {
  var menuId = props.route.params.menuId;
  // var menuId = 1;
  // menuId = 1;
  // const hash = base64.encode(username + ":" + password);
  
  
  var DATA = {
    restourantId: "1",
    restourantName: "First Restourant",
    menus: [
      {
        title: "Main dishes",
        data: [
          {
            productName: "Product",
            desciption: "Description",
            price: "25₺",
            imageUrl: "image",
            detailVisible: false
          }
        ]
      }
    ]
  };
 
  const [menuData, setMenuData] = useState(DATA);
  const [refresh, setRefresh] = useState(false);
  const [menuLoaded, setMenuLoaded] = useState(false);

  function getMenuData(menuId) {
    return fetch('https://pma.ist/api/seller', {
      method: 'POST',
      headers: {
        "Authorization": "Basic SEFSRENPREVEVU5BTUVGVFdNRlM6aGFyZGNvZGVkcHdkc2Z0d21mcw==",
        'Accept': 'application/json',
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(menuId)
    }).then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  var localPromise = getMenuData(menuId);
  localPromise.then(function (result) {
    DATA.restourantName = result.SellerName;
    DATA.menus = [];
    result.Data.forEach(menu => {
      
      menu = JSON.parse(menu);
      DATA.menus.push(menu);
      
    });

    if(!menuLoaded){
      setMenuLoaded(true);
      setRefresh(!refresh);
    }
  }, function (error) {
    
  });

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
  };

  
  const ProductDetail = function ( {item} ) {
    if(item.detailVisible){
      if(item.imageUrl != ""){
        let lineCount = Math.round(item.desciption.length / 40);
        let desciptionHeight = lineCount * 0.10;
        if (desciptionHeight < 0.2) desciptionHeight = 0.2
        // console.log(lineCount);
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