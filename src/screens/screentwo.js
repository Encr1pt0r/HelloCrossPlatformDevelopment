import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenTwo = ({ navigation }) => {
    return (
        <View>
            <Text>This is Screen Two!</Text>
            <Button 
                title="Go to Screen 1"
                onPress={() => navigation.navigate('screenone')}
            />
            <Button 
                title="Go to Home"
                onPress={() => navigation.navigate('index')}
            />
        </View>
    );
};

export default ScreenTwo;