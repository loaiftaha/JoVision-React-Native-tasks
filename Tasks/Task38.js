import React from "react";
import {View, StyleSheet} from 'react-native';
import { SharedContextProvider } from "../Components/SharedContext_task38";
import ComponentTwo_Task38 from "../Components/ComponentTwo_Task38";

export default function Task38() {
    return (
        <View style={{ flex: 1 }}>
            <SharedContextProvider>
                <ComponentTwo_Task38 />
                <ComponentTwo_Task38 />
                <ComponentTwo_Task38 />
                <ComponentTwo_Task38 />
            </SharedContextProvider>
        </View>
    );
}