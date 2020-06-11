import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function MenuHistory(props) {
  return (
    <View style={props.style.container}>
      <View style={props.style.content}>
        <Text>This is the last menus screen!</Text>
      </View>
      <View style={props.style.footer}>
        <Button title="Home" style={props.style.footerButton} onPress={() => props.navigation.navigate('HomeScreen')} />
      </View>
    </View>
    );
}
  
export default MenuHistory;

