import React, { useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import MyFunctionPage_Task24 from '../Components/MyFunctionPage_Task24';

export default function Task24(){

    const refer = useRef();

    
    return( 
        <View style={styles.FPage} >
            <TextInput
            style={styles.FInput}
            placeholder="Please Write Something: "
            multiline={true}
            onChangeText={(e) => {if(refer.current){
                refer.current.textOutput(e);
            }
            }}
            />
            <MyFunctionPage_Task24 ref={refer}/>

        </View>
    );



};




const styles = StyleSheet.create({
            FPage : {
                margin : 20,
                padding : 20,
                borderWidth : 2,
                borderRadius : 10,
            },
            FInput : {
                width : '100%',
                textAlign : 'top',
                fontSize : 20,
                color : '#333333',
                marginBottom : 20,
                borderRadius : 10,
                height : 100,
                borderColor : '#251abaff',
                textAlignVertical: 'top',
            },
        });



