import React from "react";
import { View, Text, StyleSheet, Image, Alert, Dimensions , FlatList, Pressable, Platform, ToastAndroid } from "react-native";
import {
    Task28_0,
    Task28_1,
    Task28_2,
    Task28_3,
    Task28_4,
    Task28_5,
    Task28_6,
    Task28_7,
    Task27_Irbid_Autumn,
    Task27_Irbid_Spring,
    Task27_Irbid_Winter,
} from '../Images';

export default function Task28() {
    
    const images = [
        Task27_Irbid_Autumn,
        Task27_Irbid_Spring,
        Task27_Irbid_Winter,
        Task28_0,
        Task28_1,
        Task28_2,
        Task28_3,
        Task28_4,
        Task28_5,
        Task28_6,
        Task28_7,
    ];

    const windowWidth = Dimensions.get('window').width - 50; // minus 50 for padding

    const imageHeight = new Array(images.length) ;
    const size = new Array(images.length);

    for (let i = 0 ; i < images.length ; i++){
        size[i] = Image.resolveAssetSource(images[i]);
        imageHeight[i] = (windowWidth / size[i].width) * size[i].height;
    }

    const Item = ({ item, index }) => (
        <Pressable
            onPress={() =>{
                
                    Alert.alert('Image Selected',
                    `You have selected image : ${index + 1}`,
                    [{ text: 'OK'}],
                    { cancelable: true }
                );
                

        }}
            style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        >
            <Image source={item} style={[styles.images, { width: windowWidth, height: imageHeight[index] }]} />
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Task 28 — 11 Images List</Text>

            <FlatList
                data={images}
                keyExtractor={(_, i) => String(i)}
                renderItem={Item}
                ContentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 10 ,},
    list: {
        alignItems: 'center',
    },
    pressable: {
        margin: 8,
    },
    pressed: {
        opacity: 0.5,
    },
    images: {
        borderRadius: 8,
    },  

});