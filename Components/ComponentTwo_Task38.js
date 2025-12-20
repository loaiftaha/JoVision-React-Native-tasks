import { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SharedContext } from "./SharedContext_task38";
import ComponentOne_Task38 from "./ComponentOne_Task38";



export default function ComponentTwo_Task38() {

    const {text, setText} = useContext(SharedContext);

    return (
        <View style={{ flex: 1 , borderColor: 'blue', borderWidth: 1, margin: 10}}>
            <TextInput
                style={{fontFamily: 'Arial', fontSize: 20}}
                placeholder="Task 38"
                onChangeText={(inputText) => setText(inputText)}
            />
            <ComponentOne_Task38 />
        </View>
    );

}