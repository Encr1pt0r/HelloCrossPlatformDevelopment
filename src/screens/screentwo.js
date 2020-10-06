import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const ScreenTwo = ({ navigation }) => {
    return (
        <View>
            <Text>This is Screen Two!</Text>
            <NavigationButton screenName="index" navigation={navigation} />
            <NavigationButton screenName="screenone" navigation={navigation} />
        </View>
    );
};

export default ScreenTwo;