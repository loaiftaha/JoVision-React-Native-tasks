import { useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function MyFunctionPage_Task21() {

    useEffect(() => {
        console.log('MyFunctionPage_Task21 Loaded');
        return () => {
            console.log('MyFunctionPage_Task21 Unloaded');
        };
    }, []);

        return (
            <View style={styles.cPage}>
                <Text style={styles.cText}>My function Component - Task 21</Text>
            </View>
        );

}

const styles = StyleSheet.create({
            cPage : {
                margin : 20,
                padding : 20,
                borderWidth : 2,
                borderRadius : 10,
                borderBackgroundColor : '#F5FCFF',
                backgroundColor : '#F5FCFF',
                textAlign : 'center',
            },
            cText : {
                textAlign : 'top',
                fontSize : 20,
                color : '#333333',
                marginBottom : 20,
            },
        });


