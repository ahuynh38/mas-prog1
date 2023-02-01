import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress }) {
    return (
        <View style={StyleSheet.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        marginVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: 3,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
})