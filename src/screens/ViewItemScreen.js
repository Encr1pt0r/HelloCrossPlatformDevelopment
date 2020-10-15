import React from 'react';
import {View, Text} from 'react-native';

const ViewItemScreen = ({route}) => {
    const {id, title, content, date} = route.params;
    console.log(route.params);
    return(
        <View>
            <Text>ID: {id}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>TITLE: {title}</Text>
            <Text>CONTENT: {content}</Text>
        </View>
    );
};

export default ViewItemScreen;