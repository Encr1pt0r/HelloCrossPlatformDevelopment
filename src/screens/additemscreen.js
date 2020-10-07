import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const AddItemScreen = () => {
    //let name = "";
    const [name, setName] = useState('');
    // the const is used to store a 
    return (
        <View>
            <Text style={styles.textlabel}>Enter your name</Text>
            <TextInput 
                style={styles.textinput} 
                placeholder="This is a test :)"
                onChangeText={(text) => {
                    // This attribute will log the changes in the textbox so we caught it in a variable and passed it to another one
                    setName(text);
                }}
                multiline={true} // allows multiple lines
                numberOfLines={4} // Max number of lines
                //autoCapitalise={false} 
                autoCorrect={false}
                autoFocus={true} 
                keyboardType='email-address'
                maxLength={100}
                onFocus={() => {/* Change the styling */}}
            />
            <Text style={styles.textlabel}>Your name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textinput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 2
    },
    textlabel: {
        fontSize: 18,
        padding: 5,
    }
});

export default AddItemScreen;