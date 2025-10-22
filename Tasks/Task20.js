import {useState} from 'react';
import { View, Button, StyleSheet  } from 'react-native';
import MyClassPage_Task20 from '../Components/MyClassPage_Task20';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Task19() {

    const [showClassPage, setShowClassPage] = useState(false);
    toggleClassPage = () => {
        setShowClassPage(!showClassPage);
    }

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
    }
    },
    );

    return (
        <SafeAreaProvider>
        <View style={styles.container}>
            <Button title="Show" onPress={toggleClassPage} />
            {showClassPage && <MyClassPage_Task20/>}
        </View>
        </SafeAreaProvider>
    );
}