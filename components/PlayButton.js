import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function ImportButton({ label  }) {
    return (
        <View style={styles.buttonContainer}>
         <Pressable onPress={playFile()}>
          <Text>{label}</Text>
        </Pressable>
      </View>
    )
}
