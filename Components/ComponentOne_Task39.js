import {useState, useEffect, use} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveTxt } from './StoreRedux_Task39';


export default function ComponentOne_Task39() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const savedTxt = useSelector(stt => stt.text.savedTxt);

    useEffect(() => {
        setInputText(savedTxt);
    }, []);     

    
    useEffect(() => {
        return () => dispatch(saveTxt(inputText));
        }, [inputText , dispatch]);


    return (
        <View style={styles.box}>
            <TextInput
                value= {inputText}
                onChangeText={txt => setInputText(txt)}
                placeholder="Task 39"
                style={styles.input}
                />
        </View>
    );
}


const styles = StyleSheet.create({
  box: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});