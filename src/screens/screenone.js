import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>This is Screen One!</Text>
            <Button 
                title="Go to Home"
                onPress={() => navigation.navigate('index')}
            />
            <Button 
                title="Go to Screen 2"
                onPress={() => navigation.navigate('screentwo')}
            />
        </View>
    );
};

export default ScreenOne;