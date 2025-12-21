import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import NavigationScreens from '../Components/NavigationScreens_Task42';


const Task42 = () => {

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Task 42 - Bottom Tab Navigation with route Buttons</Text>
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


export default Task42;