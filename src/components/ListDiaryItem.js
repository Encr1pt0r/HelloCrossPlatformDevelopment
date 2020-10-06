import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListDiaryItem = ({name, image}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.moduleText}>{name}</Text>
            <Image source={image} style={styles.img} />
        </View>
    );
    // So that code above is a general component that allows for an name and an image taken from props
    // 
};

export default ListDiaryItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5,
    },
    img: {
        width: 250,
        height: 250,
    },
    moduleText: {
        fontSize: 15,
        color: 'blue',
        marginTop: 10,
        marginBottom: 10,
    },
});