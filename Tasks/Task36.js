import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


function generateRandomWord(length) {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < length; i++) {
    	result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

function generateRandomSentence() {
       const words = [];
    for (let i=0 ; i< (Math.floor(Math.random() * 4 + 3)) ; i++){
        words.push(generateRandomWord(Math.floor(Math.random() * 5 + 3)));
    }
    const sentence = words.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}



export default function Task36() {

    const [sentences, setSentences] = useState([]); 

    useEffect(() => {
         const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(generateRandomSentence());
    }

    setSentences(arr);}
    , []);
    
    




    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Task 36</Text>

            <ScrollView >
                {
                    sentences.map((sentence , index) => (
                        <Text style={styles.row} key={index}>{`${index+1}:  ${sentence}`}</Text>
                    ))
                }
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  row: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});