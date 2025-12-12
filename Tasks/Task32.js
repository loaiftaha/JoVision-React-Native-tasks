import {useState} from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import Video from "react-native-video";

const Task32 = () => {

    let [width] =
    [Dimensions.get('window').width];

    const [loading, setLoading] = useState(true);
    const [videoPaused, setVideoPaused] = useState(true);
    

    return (
        <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
            <Video
                source={{ uri: 'https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/low.mp4' }}
                style={{ width: width , height: width * 0.5625 }}
                poster='https://picsum.photos/seed/bunny/800/450'
                paused={videoPaused}
                onLoad={() => setLoading(false)}
                onEnd={() => setVideoPaused(true)}
                resizeMode="contain"
                controls={true}
            />
            {loading && <Text>Loading... <ActivityIndicator style={{paddingTop: 10}} size={"small"}/> </Text>}
        </View>
    );


}

export default Task32;