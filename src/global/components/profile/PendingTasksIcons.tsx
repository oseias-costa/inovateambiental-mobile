import { StyleSheet, Text, View } from "react-native"
import { Expired } from "../../icons/Expired"
import { ParcialIcon } from "../../icons/ParcialIcon"
import { PendingIcon } from "../../icons/PendingIcon"


export const PendingTasksIcons = ({}) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Expired color="#626060" size="45" number={4} />
                <Text style={styles.text}>Vencidas</Text>
            </View>
            <View style={styles.containerIcon}>
                <PendingIcon  color="#626060" size="46" number={2} />
                <Text style={styles.text}>Pendentes</Text>
            </View>
            <View style={styles.containerIcon}>
                <ParcialIcon  color="#626060" size={45}/>
                <Text style={styles.text}>Parciais</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 22
    },
    containerIcon: {
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        fontWeight: '700',
        color: "#626060",
        paddingTop: 5
    }
})