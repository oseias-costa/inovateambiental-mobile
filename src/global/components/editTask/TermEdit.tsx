import { StyleSheet, View, Text } from "react-native"
import { CalendarEdit } from "../../icons/CalendarEdit"

export const TermEdit = ({term}) => {
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <CalendarEdit />
                <Text style={styles.subtitle}>Prazo</Text>
            </View>
            <Text style={styles.date}>{term}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 15,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    subtitle: { 
        fontSize: 16, 
        paddingBottom: 0,
        paddingLeft: 8,
        color: '#626060', 
        fontWeight: '700',
        fontSize: 17,
        position: 'relative',
        top: 1
        },
    icon: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    date: {
        fontSize: 15, 
        color: '#5686E1', 
        fontWeight: '400'
    }
})