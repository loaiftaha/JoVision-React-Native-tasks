import React, {useRef} from "react";
import { TextInput, View, StyleSheet } from "react-native";
import MyClassPage_Task25 from "../Components/MyClassPage_Task25";


export default function Task25()
{
    const refer = useRef();

     return( 
        <View style={styles.FPage} >
            <TextInput
            style={styles.FInput}
            placeholder="Please Write Something: "
            multiline={true}
            onChangeText={(e) => {if(refer.current){
                refer.current.newText(e);
            }
            }}
            />
            <MyClassPage_Task25 ref={refer}/>

        </View>
    );


    

}
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
