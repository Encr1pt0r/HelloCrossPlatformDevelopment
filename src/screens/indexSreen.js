
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import ListDiaryItem from '../components/ListDiaryItem';
import NavigationButton from '../components/NavigationButton';

const indexScreen = ({ navigation }) => {
    const a = "hello";
    let b;
    var c = "meep"
    b = "noop";
    // variable types in JavaScript are a little different from Java
    // to delcare them in the return() you have to wrap them in {} because they are in JSX

    return (
        <View style={styles.container}>
            <NavigationButton screenName="screenone" navigation={navigation} />
            <NavigationButton screenName="screentwo" navigation={navigation} />

            <ScrollView horizontal={false}>
                {/* <View style={styles.itemContainer}>
                    <Text style={styles.moduleText}>Mobile Application Development {a} hi</Text>
                    <Image source={require('../../assets/mobile.jpg')} style={styles.img} />
                </View> */}
                {/* First image was here but now I will make it into a component, see below*/}
                <ListDiaryItem name="Mobile Application Development" image={require('../../assets/mobile.jpg')} />
                <ListDiaryItem name="Software Development Practice" image={require('../../assets/sdp.jpg')} />
                <ListDiaryItem name="Programming III" image={require('../../assets/programming.jpg')} />
                <ListDiaryItem name="Individual Project" image={require('../../assets/indie.jpg')} />

                {/* Old code */ 
                /*<View style={styles.itemContainer}>
                    <Text style={styles.moduleText}>Software Development Practice {b}</Text>
                    <Image source={require('../../assets/sdp.jpg')} style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.moduleText}>Programming III {c}</Text>
                    <Image source={require('../../assets/programming.jpg')} style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.moduleText}>Individual Project {b} {c}</Text>
                    <Image source={require('../../assets/indie.jpg')} style={styles.img} />
                </View> */}
            </ScrollView>
        </View>
    );
}

export default indexScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5,
    },
    heading: {
        fontSize: 30,
        color: 'blue',
        marginTop: 10,
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
    }
});
