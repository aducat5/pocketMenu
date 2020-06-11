import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={props.style.container}>
            <View style={props.style.content}>
                <Text>This is the home screen!</Text>
            </View>
            <View style={props.style.footer}>
                <Button title="Last Menus" style={props.style.footerButton} onPress={() => props.navigation.navigate('History')} color="gray" />
            </View>
        </View>
        );
}

export default HomeScreen;

