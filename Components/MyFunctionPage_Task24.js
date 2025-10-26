import React, {useState, useImperativeHandle, forwardRef} from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default MyFunctionPage_Task24 = forwardRef((props, ref) => {

    const [output, setOutput] = useState('');

    useImperativeHandle(ref, ()=> ({
        textOutput(e){
            setOutput(e);
        }
    }));


    const styles = StyleSheet.create({
        container: {
            borderWidth : 1,
            alignItems: 'center',
            padding: 20,
            width: 'auto',
        },
        text: {
            fontSize: 20,
            color: '#251abaff',
            marginBottom: 20,
        }

    });

    return (
        
            <View style={styles.container}>
                
             {(output=='') && <Text style={styles.text} >MyFunctionPage_Task24</Text>}
             {(output!='') && <Text style={styles.text} >{output}</Text>}
                
            </View>
    
    );

}
);
