import { StyleSheet, Text, View } from "react-native"
import { StatusIconFilter } from "../../icons/StatusIconFilter"
import { ButtonActiveAndDisable } from "./ButtonActiveAndDisable"

export const StatusFilter = ({filtered, setFiltered}) => {
    return(
        <>
        <View style={styles.subtitle}>
            <StatusIconFilter />
            <Text style={styles.subtitleText}>Status</Text>
        </View>
        <View style={styles.container}>
            {['Pendente', 'Parcial', 'Realizado'].map(item => {
                return(
                    <ButtonActiveAndDisable 
                        onPress={() => {
                            setFiltered({...filtered, status: item}) }}
                        active={filtered?.status === item ? true : false} 
                        label={item}
                    />
                   )
        })}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginBottom: 10
    },
    subtitle: {
        flexDirection: 'row', 
        marginTop: 15,
        marginLeft: 38
    },
    subtitleText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#626060',
        paddingLeft: 5,
        position: 'relative',
        top: 3
    }
})