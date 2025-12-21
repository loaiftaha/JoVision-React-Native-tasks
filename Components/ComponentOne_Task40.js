import  {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { saveTxt } from './StoreRedux_Task40';


class ComponentOne_Task40 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        };
    }

    componentDidMount() {
        this.setState({ inputText: this.props.savedTxt})
    }

    componentWillUnmount() {
            this.props.saveTxt(this.state.inputText);
    }


    



render() {
    return (
        <View style={styles.box}>
            <TextInput
                value= {this.state.inputText}
                onChangeText={txt => this.setState({ inputText: txt })}
                placeholder="Task 40 - With Class Component"
                style={styles.input}
                />
        </View>
    );
}}

const mapStateToProps = (state) => {
    return {
        savedTxt: state.text.savedTxt,
    };
}

export const mapDispatchToProps = {
        saveTxt,
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


export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne_Task40);