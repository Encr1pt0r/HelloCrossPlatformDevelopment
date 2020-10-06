import React from 'react';
import { Button, StyleSheet } from 'react-native';

const NavigationButton = ({screenName, navigation}) => {

    return <Button
        title={`Go to ${screenName}`} // You can do this the typical way 
        // `string ${var}` is a JS technique called template Strings, it just looks cleaner
        onPress={() => navigation.navigate(screenName)}
        // navigation prop can be named anything
    />
};

const styles = StyleSheet.create({});

export default NavigationButton;