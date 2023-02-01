import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const HeaderModalize = ({ text, setFiltered }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <TouchableOpacity onPress={() => setFiltered({
                    status: '', companie: '', responsible: '',
                    month: '', year: new Date().getFullYear() })}
                    style={styles.cleanFilters}
                    >
                <Text style={styles.cleanFilters}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#626060',
        marginLeft: 10
    },
    cleanFilters: {
        color:'#5686E1', 
        fontWeight: '600',
        fontSize: 14,
        paddingBottom: 0,
        position: 'absolute',
        right: 20,
        top: 4
    }
})