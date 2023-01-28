import { TouchableOpacity, Text, StyleSheet, View } from "react-native"

export const CustomButtom = ({title, onPress, status, id}) => {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={status !== id ? styles.disable : styles.active}>
            <Text style={status !== id ? styles.txt : styles.txtActive}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    disable: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 7,
        paddingHorizontal: 17,
        borderRadius: 22,
        backgroundColor: '#00264B',
        margin: 2,
        borderColor: '#AFACAC',
        borderWidth: 1,
    },
    active: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 7,
        paddingHorizontal: 17,
        borderRadius: 22,
        backgroundColor: '#00264B',
        color: '#fff',
        margin: 2,
        borderColor: '#fff',
        borderWidth: 1,
    },
    txt: {
        fontSize: 16,
        color: '#AFACAC'
    },
    txtActive: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
})