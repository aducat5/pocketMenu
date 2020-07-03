import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function EmptyPage({title, detail, iconname, iconclor}) {
    
    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            alignSelf: "center",
            // justifyContent: "center"
            // textAlign:"center",
            alignItems: "center",
            paddingHorizontal: 25
            }}>
            <Ionicons name={iconname} size={150} color={iconclor} style={{marginTop:100}} />
            <Text style={{fontSize: 24, color: "darkgray"}}>{title}</Text>
        <Text style={{fontSize: 16, textAlign:"center", marginTop: 15, color: "darkgray"}}>{detail}</Text>
        </View>
        );
}

export default EmptyPage;
