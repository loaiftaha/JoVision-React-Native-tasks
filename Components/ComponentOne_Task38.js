import { useContext } from "react";
import { Text , StyleSheet } from "react-native";
import { SharedContext } from "./SharedContext_task38";

export default function ComponentOne_Task38() {
    const {text} = useContext(SharedContext);

    return (
        <Text style={styles.textStyle}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
    },
});