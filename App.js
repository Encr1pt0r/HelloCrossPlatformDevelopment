
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  const a = "hello";
  let b;
  var c = "meep"
  b = "noop";
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Computer Science BSc</Text>
      <ScrollView horizontal={false}>
        <View style={styles.itemContainer}>
          <Text style={styles.moduleText}>Mobile Application Development {a} hi</Text>
          <Image source={require('./assets/mobile.jpg')} style={styles.img} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.moduleText}>Software Development Practice {b}</Text>
          <Image source={require('./assets/sdp.jpg')} style={styles.img} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.moduleText}>Programming III {c}</Text>
          <Image source={require('./assets/programming.jpg')} style={styles.img} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.moduleText}>Individual Project {b} {c}</Text>
          <Image source={require('./assets/indie.jpg')} style={styles.img} />
        </View>
      </ScrollView>
    </View>
  );
}

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
