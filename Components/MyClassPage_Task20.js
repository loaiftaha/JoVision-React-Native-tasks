import {Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MyClassPage_Task20 extends Component {


   componentDidMount() {
    console.log('MyClassPage_Task20 Loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage_Task20 Unloaded');
}


    

    render() {

         return (
            <View style={styles.cPage}>
                <Text style={styles.cText}>My Class Component - Task 20</Text>
            </View>
        );

    }
       
}

const styles = StyleSheet.create({
            cPage : {
                margin : 20,
                padding : 20,
                borderWidth : 2,
                borderRadius : 10,
                borderBackgroundColor : '#F5FCFF',
                backgroundColor : '#F5FCFF',
                textAlign : 'center',
            },
            cText : {
                textAlign : 'top',
                fontSize : 20,
                color : '#333333',
                marginBottom : 20,
            },
        })