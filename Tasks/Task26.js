import React , { useState } from "react";
import { StyleSheet , Text, Button ,  View , ActivityIndicator} from "react-native";

export default function Task25() {
    const [ipAddress, setIpAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const nonBlocking = () => {
        fetch("https://api.ipify.org/")
            .then((res) => res.text())
            .then((ip) => setIpAddress(ip))
            .catch((err) => {
                console.log(err);
                setIpAddress("Error occurred while fetching IP");
            });
    };

    const blocking = async () => {
        try {
            setLoading(true);
            const res = await fetch ("https://api.ipify.org/");
            const ip = await res.text();
            setIpAddress(ip);
        }
        catch (err) {
            console.log(err);
            setIpAddress("Error occurred while fetching IP");
        }
        finally {
            setLoading(false);
            
        }
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={nonBlocking} title="non-blocking request" disabled={loading} />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button onPress={blocking} title="blocking request" disabled={loading} />
                </View>
            </View>
            {loading ? <ActivityIndicator size="large" /> : 
            <Text style={styles.text}>{ipAddress}</Text>}
        </View>
    );
}

   const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
        },
        buttonContainer: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            gap: 10,
        },
        buttonWrapper: {
            flex: 1,
        },
        text: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#333333',
        },
    
    });