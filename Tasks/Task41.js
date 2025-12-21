import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import NavigationScreens from '../Components/NavigationScreens_Task41';


const Task41 = () => {

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Task 41 - Bottom Tab Navigation</Text>
            <NavigationScreens/>
        </View>
    );

};

const styles = StyleSheet.create({
 
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});


export default Task41;