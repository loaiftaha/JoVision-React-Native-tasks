import { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import MyFunctionPage_Task21 from '../Components/MyFunctionPage_Task21';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function Task21() {
    const [showFunctionPage, setShowFunctionPage] = useState(false);

    toggleState = () => {
        setShowFunctionPage(!showFunctionPage);
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
    });

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Button title="Show" onPress={toggleState} />
                {showFunctionPage && <MyFunctionPage_Task21 />}
            </View>
        </SafeAreaProvider>
    );

}

