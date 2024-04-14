import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import ImportButton from './components/ImportButton';
import PlayButton from './components/PlayButton';
import SoundPlayer from 'react-native-sound-player'
import RNFS from 'react-native-fs';


export default function App() {
  const files = {}
  const filePath = RNFS.DocumentDirectoryPath

  function importFiles() {
    files.add(pick(allowMultiSelection))
    
    const makeFile = async (filePath, content) => {
      try {
        await RNFS.writeFile(filePath, content, "utf8");
        console.log("written to file");
      } catch (error) { 
        console.log(error);
      }
    };
    useEffect(() => {
      makeFile(filePath, fileContent);
      getFileContent(RNFS.DocumentDirectoryPath);
    }, []);
  }

  function playFile() {
    try {
      SoundPlayer.playSoundFile('The Athenian School 36', 'm4a')
  } catch (e) {
      console.log(`cannot play the sound file`, e)
  }
  }
  
  return (
    <View style={styles.container}>
      <PlayButton label="test"></PlayButton>
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
