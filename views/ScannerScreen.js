import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
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
        setScanned(true);
        dataArray = data.split("-");
        if (dataArray[0] === "https://pma.ist/menu"){
            menuId = dataArray[1];
            navigation.navigate("Menu", {menuId : menuId});
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
                    padding:20,
                    flexDirection:"row"
                }}>
                    <Text>Looking for camera permissions.</Text>
                    <ActivityIndicator
                    color="#FF5733"
                    />
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
