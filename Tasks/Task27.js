import React, {useState} from "react";
import { View, Text, StyleSheet, Image, Alert, Button, Dimensions } from "react-native";
import {Task27_Irbid_Autumn, Task27_Irbid_Spring, Task27_Irbid_Winter} from '../Images';


        let imgWidth ;
        let imgHeight ;
        
export default function Task27() {

    const [is1Pressed, set1] = useState (false);
    const [is2Pressed, set2] = useState (false);
    const [is3Pressed, set3] = useState (false);


    const pop_up = () => {
        Alert.alert(
            "Irbid Images",
        "choose the image you want to see",
    [
        {
            text : "Irbid Autumn",
            onPress: () => { set1(true); set2(false); set3(false); 

            } 
            ,
        },
        {
            text : "Irbid Winter",
            onPress: () => { set1(false); set2(true); set3(false); 

            } ,
        },
        {
            text : "Irbid Spring",
            onPress: () => { set1(false); set2(false); set3(true); 
            } ,
            
        },
        
    ]);
        }


    const theSelectedSource = () => {
        if (is1Pressed) {
            return Task27_Irbid_Autumn;
        }
        if (is2Pressed) {
            return Task27_Irbid_Winter;
        }
        if (is3Pressed) {
            return Task27_Irbid_Spring;
        }
        return null;
    }
   
    const selectedSource = theSelectedSource() ;


    const [ windowWidth, windowHeight ] = [ Dimensions.get("window").width , Dimensions.get("window").height];
    const headerHeight = 120; 
    const availableHeight = windowHeight - headerHeight ;


    let imageStyle = null;

    if (selectedSource) {
        const resource = Image.resolveAssetSource(selectedSource);
         imgWidth = resource.width ;
         imgHeight = resource.height;


        // in case of height is greater than available height
        if (imgHeight > availableHeight) {
            const scale = availableHeight / imgHeight;
            imgWidth = imgWidth * scale; // adjust the width
            imgHeight = availableHeight; // then adjust the height
        }

        // now in case of width is greater than available width
        if (imgWidth > windowWidth) {
            const scale = windowWidth / imgWidth;
            imgHeight = imgHeight * scale; // adjust the height
            imgWidth = windowWidth; // then adjust the width
        }

        // finally I WILL APPLY THAT
        imageStyle = {
            width: imgWidth,
            height: imgHeight,
            resizeMode: 'contain',
        };

    }

   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Irbid Images - Task 27</Text>
                <Button onPress={pop_up} title="Click To Choose An Image" />
            </View>

            <View style={styles.imageContainer}>
                {selectedSource ? (
                    <Image source={selectedSource} style={imageStyle} />
                ) : (
                    <Text style={styles.atFirst}>No image selected yet</Text>
                )}
            </View>
        </View>
    );

}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    },
    
    header: {
        height: 120,
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    atFirst: {
        color: '#666',
        fontSize: 16,
    },
});