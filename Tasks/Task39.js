import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ComponentOne_Task39 from '../Components/ComponentOne_Task39';

const Task39 = () => {

    const [visible, setVisible] = React.useState(true);


    return (
        <View >
            <Text >Task 39 - Redux</Text>

            {visible && <ComponentOne_Task39 />}
            <Button title={visible ? 'Hide' : 'Show'} onPress={() => setVisible(!visible)} />
            
        </View>
    );
};

export default Task39;