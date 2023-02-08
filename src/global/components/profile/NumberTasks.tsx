import { View, Text, StyleSheet } from "react-native"

export const NumberTasks = ({qtd}) => {
    return(
        <View style={styles.container}>
            <Text>5</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#FF4C4C',
        paddingHorizontal: 5,
        paddingVertical: 2,
        zIndex: 2,
        borderRadius: 20,
        right: 15
    }
})