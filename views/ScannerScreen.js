import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, ToastAndroid, AsyncStorage } from 'react-native';
import Constants from "expo-constants";
import { BarCodeScanner } from 'expo-barcode-scanner';

const style = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight + 10,
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
    }
  });

var navigation = null;

var getMenuData = function (menuId, onSuccess, onFailure) {
      var localPromise = fetch('https://pma.ist/api/seller', {
      method: 'POST',
      headers: {
        "Authorization": "Basic SEFSRENPREVEVU5BTUVGVFdNRlM6aGFyZGNvZGVkcHdkc2Z0d21mcw==",
        'Accept': 'application/json',
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(menuId)
    }).then((response) => response.json()).then((json) => {return json;}).catch((error) => {console.error(error);});

    localPromise.then(function (result) {
        if(result.SellerName != null){
            var DATA = {
                "restourantName": result.SellerName,
                "accentColor": JSON.parse(result.SellerJSON).accentColor,
                "menus": []
            };
    
            result.Data.forEach(menu => {
                menu = JSON.parse(menu);
                DATA.menus.push(menu);
            });
            
            if(onSuccess)
                onSuccess(DATA);
        }else{
            if(onFailure != null)
                onFailure(result.Result);
        }
    }, function (error) {
        if(onFailure != null)
            onFailure(error);
    });
};

let addToHistory = async function (scannedMenu) {
    let menuHistory = await AsyncStorage.getItem("menuHistory");
    if (menuHistory == null){
        menuHistory = [scannedMenu];
        await AsyncStorage.setItem("menuHistory", JSON.stringify(menuHistory));
    }else{
        menuHistory = JSON.parse(menuHistory);
        let tempHistoryArray = [];
        tempHistoryArray.push(scannedMenu);
        menuHistory.forEach(function (item, index, array) {
            if (item.id !== scannedMenu.id)
                tempHistoryArray.push(item);
        });
        menuHistory = tempHistoryArray;
        if(menuHistory.length > 10)
            menuHistory.pop();
        await AsyncStorage.setItem("menuHistory", JSON.stringify(menuHistory));
    }
};

let getTodayDate = function () {
  let dateObject = new Date();
  return dateObject.getDay() + "." + dateObject.getMonth() + "." + dateObject.getFullYear(); 
};

function ScannerScreen(props) {
    navigation = props.navigation;
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const handleBarCodeScanned = ({ type, data }) => {
        let urlParts = data.split("-");
        if (urlParts[0] === "https://pma.ist/menu"){
            var menuId = urlParts[1];
            // getMenuData(menuId, function (menuData) {
            //     let historyItem = {
            //         "id": menuId,
            //         "name": menuData.restourantName,
            //         // "location": menuData.location,
            //         "date": getTodayDate()
            //     };
            //     addToHistory(historyItem);
            //     navigation.navigate("Menu", {menuData : menuData});
            // }, function (error) {
            //     setScanned(true);
                
            //     ToastAndroid.showWithGravityAndOffset(
            //         error,
            //         ToastAndroid.LONG,
            //         ToastAndroid.CENTER,
            //         25,
            //         50
            //       );
            // });
            navigation.navigate("Menu", {menuId});
        }else{
            alert(`The barcode you have scanned is not a PocketMenu. But it does carry this data:` + data);
        }
    };   

    if (hasPermission === false) {
        return (
            <View style={style.container}>
                <View style={{padding:20}}>
                    <Text style={{marginBottom:15}}>We need you to allow the use of camera in order to scan a menu's qr code. If you hit deny on purpose, please retry with button below.</Text>
                    <View style={{width: "100%", flexDirection:"row", justifyContent:"center"}}>
                    <Button 
                        title="Open Camera"
                        type="clear"
                        color="#FF5733"                        
                    />
                    </View>
                </View>
            </View>
            );    
    } else if (hasPermission === null) {
        return (
            <View style={style.container}>
                <View style={{
                    // padding:20,
                    flexDirection:"column"
                }}>
                    <ActivityIndicator
                    color="#FF5733"
                    size="large"
                    />
                    <Text style={{textAlign:"center"}}>Looking for camera permissions.</Text>
                    
                </View>
            </View>
            );    
    } else {
        return (
            <View style={style.container}>
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />

            {scanned && (
                <View style={{alignSelf:"flex-end"}}>
                    <Button 
                        title="Tap to scan again" 
                        onPress={() => setScanned(false)}
                        color="#FF5733"
                     />
                </View>
            )}
            </View>
        );
    }
    
}

export default ScannerScreen;
