import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import ImportButton from './components/ImportButton';


export default function App() {
  const files = {}
  function importFiles() {
    files.add(pickSingle(allowMultiSelection))
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
