import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const myDiary = [
    {
        id: -1,
        title: "This is my first entry",
        content: "Wheeeeeeeeee",
        date: new Date(),
    }, {
        id: -2,
        title: "This is my second entry",
        content: "Wheeeeeeeeee",
        date: new Date(),
    }
];

const ListViewScreen = ({ navigation }) => {
    const [entry, setEntry] = useState(myDiary);
    //console.log(entry);
    return (
        <View>
            <FlatList
                data={entry}
                keyExtractor={
                    (element) => element.id.toString()
                }
                renderItem={({ item }) => {
                    console.log(item);
                    // if you look closely it has properties you can call, 
                    //I did this in the arrow function above to call the title
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                console.log("I've been pressed");
                            }}
                        >
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.date.toLocaleDateString()}
                                    </Text>
                                    <Text>
                                        {item.date.toLocaleTimeString()}
                                    </Text>
                                </View>
                                <Text style={styles.titleText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
};

const styles = new StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start',
    }
});

export default ListViewScreen;