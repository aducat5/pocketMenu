import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmptyPage from '../components/EmptyPage';

function MapScreen(props) {
    return (
        <EmptyPage
        title="Under Development"
        detail="We are still developing this feature. Thanks for your understanding."
        iconclor="#EAEAEA"
        iconname="ios-construct"
        />
        );
}

export default MapScreen;
