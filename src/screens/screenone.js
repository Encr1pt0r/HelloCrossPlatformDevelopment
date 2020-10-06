import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const ScreenOne = ({ navigation }) => {
    return (
        <View>
            <Text>This is Screen One!</Text>
            <NavigationButton screenName="index" navigation={navigation} />
            <NavigationButton screenName="screentwo" navigation={navigation} />
        </View>
    );
};

export default ScreenOne;