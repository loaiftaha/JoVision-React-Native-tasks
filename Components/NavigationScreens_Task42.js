import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ScreenOne(){

    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen One = '1'</Text>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                title= "Go to Screen 2"
                onPress= {() => navigation.navigate('Screen2') }
                />
            <Button
                title= "Go to Screen 3"
                onPress= {() => navigation.navigate('Screen3') }
                />
                <Button
                title= "Go to Screen 4"
                onPress= {() => navigation.navigate('Screen4') }
                />
            </View>
        </View>
    );
}


export function ScreenTwo(){

    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Two = '2'</Text>

            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                title= "Go to Screen 1"
                onPress= {() => navigation.navigate('Screen1') }
            /><Button
                title= "Go to Screen 3"
                onPress= {() => navigation.navigate('Screen3') }
            /><Button
                title= "Go to Screen 4"
                onPress= {() => navigation.navigate('Screen4') }
            />
            </View>

        </View>
    );
}


export function ScreenThree(){

    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Three = '3'</Text>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                title= "Go to Screen 1"
                onPress= {() => navigation.navigate('Screen1') }
            /><Button
                title= "Go to Screen 2"
                onPress= {() => navigation.navigate('Screen2') }
            /><Button
                title= "Go to Screen 4"
                onPress= {() => navigation.navigate('Screen4') }
            />
            </View>
        </View>
    );
}


export function ScreenFour(){

    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>Screen Four = '4'</Text>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                title= "Go to Screen 1"
                onPress= {() => navigation.navigate('Screen1') }
            /><Button
                title= "Go to Screen 2"
                onPress= {() => navigation.navigate('Screen2') }
            /><Button
                title= "Go to Screen 3"
                onPress= {() => navigation.navigate('Screen3') }
            />
            </View>
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
