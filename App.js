
import React from 'react';
//import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexScreen from './src/screens/indexSreen';
import ScreenOne from './src/screens/screenone';
import ScreenTwo from './src/screens/screentwo';
import AddItemScreen from './src/screens/additemscreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="list">
        <Stack.Screen
          name="View"
          component={ViewItemScreen}
          options= {{title: "View Item"}}
        />
        <Stack.Screen 
          name="list"
          component={ListViewScreen}
          options={{title: "List all items"}}
        />
        <Stack.Screen 
          name="add"
          component={AddItemScreen}
          options={{title: "Add a new item"}}
        />
        <Stack.Screen
          name="index"
          component={indexScreen}
          options={{ title: "Computer Science BSc" }}
        />
        <Stack.Screen
          name="screenone"
          component={ScreenOne}
          options={{ title: "Screen 1" }}
        />
        <Stack.Screen
          name="screentwo"
          component={ScreenTwo}
          options={{ title: "Screen 2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({

// });
