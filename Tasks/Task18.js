import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default Task16 = () => {

    const [loading, set] = useState(true);

    useEffect(() => {
        setTimeout(() => set(false) , 5000);
    });
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
       
        Text: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#333333',
        },
        Text2: {
            fontSize: 50,
            textAlign: 'center',
            margin: 10,
            color: 'blue',
        },
    
    });
    
    return (
    <View style={styles.container}>
        {loading ? (
            <><ActivityIndicator size={'large'} color='blue'/>
        <Text style={styles.Text} >Loading...</Text></>
        ) : (
            <Text style={styles.Text2}>Loai Fathi</Text>
            )}
    </View>
        );

    
}