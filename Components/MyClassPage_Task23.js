import React , {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';



export default class MyClassPage_Task23 extends Component {

    
render() {
    return( 
        <View style={styles.FPage} >
            <TextInput
                style={styles.FInput}
                multiline={true}
                placeholder="Please Write Something:"
                onChangeText={this.props.onTextChange}
            />
        </View>
    );
}


}




const styles = StyleSheet.create({
            FPage : {
                width : '100%',
                margin : 20,
                padding : 20,
                borderWidth : 2,
                borderRadius : 10,
                borderBackgroundColor : '#F5FCFF',
                backgroundColor : '#F5FCFF',
                textAlign : 'center',
            },
            FInput : {
                width : '100%',
                textAlign : 'top',
                fontSize : 20,
                color : '#333333',
                marginBottom : 20,
                borderWidth : 2,
                borderRadius : 10,
                height : 200,
                padding : 10,
                borderColor : '#251abaff',
                textAlignVertical: 'top',
            },
        });




