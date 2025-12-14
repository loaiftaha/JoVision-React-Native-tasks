import { useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useCurrentTime from "../Components/useCurrentTime";

const Clock = () => {

    const currentDateTime = useCurrentTime();

    const nowTime = currentDateTime.toLocaleTimeString();
    const todayDate = currentDateTime.toLocaleDateString();

    return (
        <View style={styles.clockContainer}>
            <Text style={styles.clockText}>Time Now: {nowTime}</Text>
            <Text style={styles.clockText}>Date Today: {todayDate}</Text>
        </View>
    );
}

const Task34 = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <View style={styles.screen}>
        
        <View>
            {isVisible ? <Clock/> : <Text>Clock is UNMOUNTED</Text> }
        </View>

        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setIsVisible((curr) => !curr)}
                >
                    <Text style={styles.buttonText}>{isVisible ? 'Unmount Clock' : 'Mount Clock'}</Text>
                </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Task 34 - Custom Hook</Text>
        </View>
    );

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0b0f19',
    padding: 20,
    justifyContent: 'center',
  },

  clockContainer: {
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
  },

  clockText: {
    color: '#e5e7eb',
    fontSize: 18,
    marginVertical: 4,
  },

  unmountedText: {
    color: '#fca5a5',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    marginTop: 16,
    alignSelf: 'center',
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  footerText: {
    marginTop: 18,
    textAlign: 'center',
    color: '#9ca3af',
  },
});



    export default Task34;