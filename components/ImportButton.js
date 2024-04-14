import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function ImportButton({ label, onPress }) {
    return (
        <Pressable onPress={importFiles()}></Pressable>
    )
}
