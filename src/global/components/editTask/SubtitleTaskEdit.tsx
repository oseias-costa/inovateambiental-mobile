import { View, Text, StyleSheet } from "react-native"
import { TaskEdit } from "../../icons/TaskEdit"

export const SubtitleTaskEdit = () => {
    return(
        <View style={styles.container}>
            <TaskEdit />
            <Text style={styles.subtitle}>Atividade</Text>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 15,
        marginBottom: 6
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
        }
})