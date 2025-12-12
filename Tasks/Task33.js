import {useState, useRef} from "react";
import { View, Text, Dimensions, ActivityIndicator, TouchableOpacity , StyleSheet } from "react-native";
import Video from "react-native-video";

const Task33 = () => {

    let [width] = [Dimensions.get('window').width];

    const [loading, setLoading] = useState(true);
    const [videoPaused, setVideoPaused] = useState(true);

    const videoRef = useRef(null);

    const handleToggle = () => {
        setVideoPaused((curr) => !curr);
    };

    return (
        <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
            
                <View style={{ width: width , height: width * 0.5625 }}>
                <Video
                ref={videoRef}
                source={{ uri: 'https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/low.mp4' }}
                style={ StyleSheet.absoluteFill}
                poster='https://picsum.photos/seed/bunny/800/450'
                paused={videoPaused}
                onLoad={() => setLoading(false)}
                onEnd={() => setVideoPaused(true)}
                onError={(e) => console.log('onError', e)}
                resizeMode="contain"
                controls={false}
                />
                <TouchableOpacity 
                 onPress={handleToggle}
                 activeOpacity={0.7}
                 style={{
                    ...StyleSheet.absoluteFill,
                    zIndex: 1,
                 }}>
                    {videoPaused && !loading &&
                    ( <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)'}}> 
                          <Text style={{color: 'white', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.3)'}}>▶ Play</Text> 
                      </View> )}
                </TouchableOpacity>
                </View>
            
            {loading && <Text 
            style={{color: 'blue'}}>Loading... 
            <ActivityIndicator style={{paddingTop: 10 , color: 'blue'}} size={"small"}/> </Text>}
        </View>
    );


}

export default Task33;

