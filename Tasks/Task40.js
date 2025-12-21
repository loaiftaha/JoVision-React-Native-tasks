import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ComponentOne_Task40 from '../Components/ComponentOne_Task40';

const Task40 = () => {

    const [visible, setVisible] = React.useState(true);


    return (
        <View >
            <Text >Task 40 -Class Redux</Text>

            {visible && <ComponentOne_Task40 />}
            <Button title={visible ? 'Hide' : 'Show'} onPress={() => setVisible(!visible)} />
            
        </View>
    );
};

export default Task40;