import react, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default Task16 = () => {

    const [isVisible, set] = useState (false);
    const btnTitle = isVisible ? "Hide" : "Show";

    const toggle = () => {
        set(!isVisible);
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        Btn : {
            marginBottom: 20,
        },
        Text: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#333333',
        },
    
    });
    
    return (
    <View style={styles.container}>
        <Button style={styles.Btn} onPress={toggle} title={btnTitle}></Button>
        {isVisible && <Text style={styles.Text}>Loai Fathi</Text>}
    </View>
        );

    
}