import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, Image, Alert, Dimensions , FlatList, Pressable, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default function Task30() {
    
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

    // const imageIndex = new Array(images.length);
    // for (let i = 0 ; i < images.length ; i++){
    //     imageIndex[i] = i;
    // }


    const [image, setImage] = useState(images);

    const imageIndex = new Array(images.length);
    for (let i = 0 ; i < image.length ; i++){
        imageIndex[i] = i;
    }
    

    const flatListRef = useRef(null);
    const [isModalVisible, setModalVisible] = useState(false);
    
    const windowWidth = Dimensions.get('window').width - 50; // minus 50 for padding

    const imageHeight = new Array(image.length) ;
    const size = new Array(image.length);


    for (let i = 0 ; i < image.length ; i++){
        size[i] = Image.resolveAssetSource(image[i]);
        imageHeight[i] = (windowWidth / size[i].width) * size[i].height;
    }


    const imageMargin = 16 ; // from styles.pressable margin: 8
    const scrolls = new Array(image.length);
    
    scrolls[0] = 0 ;

    for (let i = 1 ; i < image.length ; i++){
        scrolls[i] = scrolls[i - 1] + imageHeight[i - 1] + imageMargin;
    }

    const itemLocation = (_ , index) => {
        return { length: imageHeight[index] + imageMargin,
                 offset: scrolls[index],
                 index: index };
    }



    const Item = ({ item, index }) => (
        <View>
        <Pressable style={{alignSelf: 'flex-end', top: 10}}>
        <Icon name="close" size={20} color="black"
                onPress={() =>{ 
                    const updatedArray = image.filter((_, i) => i !== index);
                    setImage(updatedArray) ; 
                    Alert.alert(`Image of index ${index} is deleted`,'' ,[] ,{ cancelable: true});
                
            }
                } />
                
        </Pressable>
        <Pressable
            onPress={() =>{
                
                    Alert.alert('Image Selected',
                    `You have selected image : ${index}`,
                    [{ text: 'OK'}],
                    { cancelable: true }
                );
                

        }}
    
            style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        >
                
            
            <Image source={item} style={[styles.images, { width: windowWidth, height: imageHeight[index] }]} />
        </Pressable>
        </View>
    );




    const indexChooser = ( { item: imageIndex } ) => {
        return (
            <View style={styles.modalView}>
                <Pressable 
                style={styles.modalPressable}
                onPress={() => {
                    {
                    try{
                        flatListRef.current.scrollToIndex({ index: imageIndex, animated: true });
                        setModalVisible(!isModalVisible);
                    }
                    catch (err){
                        console.log(err);
                        Alert.alert(
                            'Error',
                            'Index out of bounds; this IMAGE does NOT exist NOW because you deleted it',
                            [{ text: 'Understood' }],
                            { cancelable: true });
                    }
                    }

                }}
                >
                    <Text style={styles.modalIndex}>{imageIndex}</Text>
                </Pressable>
            </View>
        );
    }
    


    return (
        <View style={styles.container}>

            <Pressable
                onPress={() => setModalVisible(!isModalVisible)}
                >
                <View style={styles.viewButton}>
            <Text style={styles.text}>Task 30 — Click Here</Text>
               </View>


            </Pressable>
            
            
              <Modal
                animationType="slide"
                visible={isModalVisible}
                style={styles.modal}
                onRequestClose={() => {
                setModalVisible(!isModalVisible);

                }}
                
                >
                    <Text style={styles.modalText}>
                            Choose the index in which you want to scroll
                            </Text>
                    <FlatList
                        
                        
                        data={imageIndex}
                        numColumns={5}                        
                        keyExtractor={(_, i) => String(i)}
                        renderItem={indexChooser}
                        ContentContainerStyle={styles.list}
                    />
                </Modal>

            <FlatList
                data={image}
                ref={flatListRef}
                keyExtractor={(_, i) => String(i)}
                renderItem={Item}
                getItemLayout={itemLocation}
                ContentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Icon: {
        padding:4,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButton: {
        marginTop: 8,
        borderRadius: 10,
        backgroundColor: '#2196F3',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginBottom: 10,
        marginTop: 10 ,},
    modalText: {
        justifyContent: 'space-around',
        margin: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor : '#2196F3' , 
        marginBottom: 15,
    },
    modalIndex: {
        alignItems: 'center',
        margin: 8 ,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#b5b5b5ff',
        color: '#353535ff',
    },
    modalPressable: {
        
        alignItems: 'center',
        margin: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#b5b5b5ff',
    },
    modalView: {
        margin: 3,
        width: '18%',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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