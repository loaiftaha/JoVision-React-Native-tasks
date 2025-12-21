import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export function ScreenOne(){
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen One = '1'</Text>
        </View>
    );
}


export function ScreenTwo(){
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Two = '2'</Text>
        </View>
    );
}


export function ScreenThree(){
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Three = '3'</Text>
        </View>
    );
}


export function ScreenFour(){
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Four = '4'</Text>
        </View>
    );
}


const Navigator = createStaticNavigation(
    createBottomTabNavigator(
        {
            screens: {
                Screen1: {screen: ScreenOne, options: {tabBarLabel: 'Page 1', tabBarIcon: () => 
                    <Icon name="home" size={24} color="black"></Icon>
                }},
                Screen2: {screen: ScreenTwo, options: {tabBarLabel: 'Page 2', tabBarIcon: () => 
                    <Icon name="home" size={24} color="black"></Icon>
                }},
                Screen3: {screen: ScreenThree, options: {tabBarLabel: 'Page 3', tabBarIcon: () => 
                    <Icon name="home" size={24} color="black"></Icon>
                }},
                Screen4: {screen: ScreenFour, options: {tabBarLabel: 'Page 4', tabBarIcon: () => 
                    <Icon name="home" size={24} color="black"></Icon>
                }},
            },
        },
    )
);


export default function NavigationScreens() {
    return (
        <Navigator/>
    );
}



const styles = StyleSheet.create({
  
  screen: {
    flex: 1,                   
    alignItems: 'center',          
    justifyContent: 'center',       
    backgroundColor: '#fff',
  },
  screenText: {
    fontSize: 26,
    fontWeight: '700',
  },
});
