import { StyleSheet, View, Text } from "react-native"
import { CalendarEdit } from "../../icons/CalendarEdit"

export const TermEdit = ({term}) => {
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <CalendarEdit size='20' />
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
        paddingBottom: 0,
        paddingLeft: 8,
        color: '#626060', 
        fontWeight: '500',
        fontSize: 14,
        position: 'relative',
        top: 1
        },
    icon: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    date: {
        fontSize: 14, 
        color: '#5686E1', 
        fontWeight: '400'
    }
})