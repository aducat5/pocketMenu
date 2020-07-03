import React from 'react';
import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, SectionList, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Menu(props) {
  var DATA = props.route.params.menuData;
  
  // const [menuData, setMenuData] = useState(menu);
  const [refresh, setRefresh] = useState(false);
  // const [menuLoaded, setMenuLoaded] = useState(false);
  
  function productOnPress(product) {
    product.detailVisible = !product.detailVisible;
    // setMenuData(menuData);
    setRefresh(!refresh);
  }

  const SeeDetailIcon = function ( {detailVisible} ) {
    
    let iconName = "ios-arrow-forward";
    let iconColor = DATA.accentColor;
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
        let lineCount = Math.round(item.description.length / 40);
        let descriptionHeight = lineCount * 0.10;
        if (descriptionHeight < 0.2) descriptionHeight = 0.2
        return(
        <View
          style={{
            backgroundColor:"white",
            flex: descriptionHeight,
            justifyContent:"center",
            opacity: 0.65,
            paddingLeft: 10,
            paddingVertical:15,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 30
          }}
        >
          {/* <Text>{item.productName}</Text> */}
          <Text style={{fontSize: 12, marginBottom: 10}}>{item.description}</Text>
          <Text style={{fontSize: 11}}>{item.price}</Text>
        </View>
        )
      }
    }
    return (<View></View>)
  }
    
  const SectionHeader = ({ title }) => (
    <View style={{
      marginVertical: 10,
      borderBottomColor: DATA.accentColor,
      borderBottomWidth: 2,
      borderRadius: 5
    }}>
      <Text style={style.sectionText, {marginBottom: 5}} >{title}</Text>
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
        <View style={{
          marginVertical:15,
          borderBottomColor: "#EEEEEE",
          borderBottomWidth: 2,
          borderRadius: 5
          
          }}>
          <Text style={{fontSize: 28}}>{DATA.restourantName}</Text>
        </View>
        <SectionList
          sections={DATA.menus}
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
    // height:70,
    borderTopColor:"#E5E5E5",
    borderTopWidth:1,
    backgroundColor:"#EEEEEE",
    paddingVertical: 15
  },
  productText: {
    marginLeft: 10,
    justifyContent:"space-between",
    flex:4
  },
  productName: {
    fontSize: 13,
    color:"#373737",
    width: "95%"
  },
  productPrice: {
    fontSize: 10,
    color:"#4F4F4F",
    width: "95%"    
  },
  sectionHeader: {
    marginVertical: 10,
    borderBottomColor: "#FF5733",
    borderBottomWidth: 2,
    borderRadius: 5
  },
  sectionText: {
    marginLeft: 5,
    fontSize: 17
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