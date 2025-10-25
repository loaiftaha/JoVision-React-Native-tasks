import { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import MyFunctionPage_Task22 from '../Components/MyFunctionPage_Task22';
import { SafeAreaProvider} from 'react-native-safe-area-context';


export default function Task21() {

    const [textOutput, setTextOutput] = useState('');
   // const [laimOutput, setlaimOutput]= useState('');



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
                <MyFunctionPage_Task22 onTextChange={(setTextOutput) }/>
                
            </View>
        </SafeAreaProvider>
    );

}

