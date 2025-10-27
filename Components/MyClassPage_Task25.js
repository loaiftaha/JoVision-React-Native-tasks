    import React, { Component} from "react";
    import { Text, View, StyleSheet } from "react-native";

    export default class MyClassPage_Task25 extends Component
    {
        constructor(props){
            super(props);
            this.state = {childText : ''};
        }
        
        newText(e){
            this.setState({childText : e}) ;
        }

        render() {
            return (
                <View style={styles.container}>
                    {(this.state.childText=='') && <Text style={styles.text}>MyClassPage_Task25</Text>}
                    {(this.state.childText!='') && <Text style={styles.text}>{this.state.childText}</Text>}
                </View>
            )
        }
    }
    
    
    const styles = StyleSheet.create({
        container: {
            borderWidth : 1,
            alignItems: 'center',
            padding: 20,
            width: 'auto',
        },
        text: {
            fontSize: 20,
            color: '#251abaff',
            marginBottom: 20,
        }

    });