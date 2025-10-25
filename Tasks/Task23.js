import { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import MyClassPage_Task23 from '../Components/MyClassPage_Task23';
import { SafeAreaProvider} from 'react-native-safe-area-context';


export default function Task21() {

    const [textOutput, setTextOutput] = useState('');



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        button: {
            marginBottom: 20,
            fontSize: 18,
        },
        text: {
            fontSize: 20,
            color: '#251abaff',
            marginBottom: 20,
        }

    });

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>{textOutput}</Text>
                <MyClassPage_Task23 onTextChange={(setTextOutput) }/>
                
            </View>
        </SafeAreaProvider>
    );

}

