
import { NewAppScreen } from '@react-native/new-app-screen';
import {  StyleSheet, useColorScheme, View } from 'react-native';
//import Task16 from './Tasks/Task16';
//import Task17 from './Tasks/Task17';
//import Task18 from './Tasks/Task18';
//import Task19 from './Tasks/Task19';
//import Task20 from './Tasks/Task20';
//import Task21 from './Tasks/Task21';
// import Task22 from './Tasks/Task22';
// import Task23 from './Tasks/Task23';
// import Task25 from './Tasks/Task25';
//import Task26 from './Tasks/Task26';
// import Task27 from './Tasks/Task27';
import Task28 from './Tasks/Task28';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    //<SafeAreaProvider><Task16></Task16></SafeAreaProvider>
    //<SafeAreaProvider><Task17></Task17></SafeAreaProvider>
    //<SafeAreaProvider><Task18></Task18></SafeAreaProvider>
    //<SafeAreaProvider><Task19></Task19></SafeAreaProvider>
    //<SafeAreaProvider><Task20></Task20></SafeAreaProvider>
    //<SafeAreaProvider><Task21></Task21></SafeAreaProvider>
    // <SafeAreaProvider><Task22></Task22></SafeAreaProvider>
    // <SafeAreaProvider><Task23></Task23></SafeAreaProvider>
    // <SafeAreaProvider><Task24></Task24></SafeAreaProvider>
    // <SafeAreaProvider><Task25></Task25></SafeAreaProvider>
    // <SafeAreaProvider><Task26></Task26></SafeAreaProvider>
    // <SafeAreaProvider><Task27></Task27></SafeAreaProvider>
    <SafeAreaProvider><Task28></Task28></SafeAreaProvider>

  
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
