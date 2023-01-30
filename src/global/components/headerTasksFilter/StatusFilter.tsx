import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const StatusFilter = ({filtered, setFiltered}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {['Pendente', 'Parcial', 'Realizado'].map(item => {
                return(
                <View style={styles.status}>
                    <Text style={styles.text}>{item}</Text>
                    <TouchableOpacity style={styles.radio} onPress={() => {
                        setFiltered({...filtered, status: item}) }}>
                    <View style={filtered?.status === item ? styles.inner : null} />
                    </TouchableOpacity>
                </View>)
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5
    },
    inner: {
        width: 13,
        height: 13,
        borderRadius: 10,
        backgroundColor: '#48494B'
    },
    text: {
        color: '#48494B'
    },
    status: {
        flexDirection: 'row',
        padding: 18
    }
})