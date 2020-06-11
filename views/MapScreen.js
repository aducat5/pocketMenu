import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

function MapScreen(props) {
    console.log(props);
    return (
        <View>
            <Image source={require('../assets/map.png')}></Image>
        </View>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        marginTop:20
    }
});

export default MapScreen;
