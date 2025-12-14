import {useState, useEffect} from "react";
import { Text,TextInput, View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "USER_DATA";

export default function Task35() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [MSG, setMSG] = useState("");

    useEffect(() => {
        checkPrevSavedData();
    }, []);



    const checkPrevSavedData = async () => {
    
        try {
            const savedData = await AsyncStorage.getItem(STORAGE_KEY);

            if (!savedData) {
                setMSG("No previous data found.");
                return;
            }

            const saved = JSON.parse(savedData);
            const lastSavedTime = new Date(saved.timestamp);
            const now = new Date();
            const isNew = (now - lastSavedTime) < 60 * 1000;  //  min Boolean

            if (isNew) {
                setName(saved.name);
                setAge(saved.age);
                setCountry(saved.country);
                setMSG("Previous data loaded successfully.");

            }
        
        }

    catch (e) {
                setMSG(`Error retrieving data: ${e.message}`);
                Alert.alert("Error", `Error retrieving data:\n ${e.message}`);
            }


    }
        

    const createObject = () => {
        if(!name || !age || !country) {  
            setMSG("Please fill in all fields.");
            Alert.alert("Error","Please fill in all fields");
            return;
        }

        const dataObject = {
            name,
            age,
            country,
            timestamp: new Date().toISOString(),
        };


        if(!!name && !!age && !!country) {
        try {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));
            setMSG("Data saved successfully.");

        }
        catch (e) {
            setMSG(`Failed to save data: ${e.message}`);
            Alert.alert("Error", `Failed to save data:\n ${e.message}`);
        }
    }
    }

    const interval = () => {
        setTimeout(() => {
            setMSG("");
        }, 5000);
    }

return (
<View style={styles.screen}>
        <Text style={styles.title}>Task 35</Text>
    <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Your name"
        placeholderTextColor="gray"
        />
    </View>
    <View style={styles.field}>
        <Text style={styles.label}>Age</Text>
        <TextInput
        placeholder="Your age"
        placeholderTextColor="gray"
        value={age}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={setAge}
        />
    </View>
    <View style={styles.field}>
        <Text style={styles.label}>Country</Text>
        <TextInput
        value={country}
        style={styles.input}
        onChangeText={setCountry}
        placeholder="Your country"
        placeholderTextColor="gray"
         />
    </View>

    <TouchableOpacity style={styles.button} onPress={createObject}>
        <Text>Submit</Text>
    </TouchableOpacity>

    {!!MSG && <Text style={styles.msg}>{MSG}</Text>  }
</View>

    
);

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0b0f19",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 18,
  },

  field: {
    marginBottom: 12,
  },

  label: {
    color: "#cbd5e1",
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    placeholderTextColor: "#ffffff",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#ffffff",
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },

  msg: {
    marginTop: 14,
    color: "#94a3b8",
    textAlign: "center",
  }
});
