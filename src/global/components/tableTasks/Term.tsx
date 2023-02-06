import { View, Text, StyleSheet } from "react-native"
import { Time } from "../../icons/Time"

export const Term = ({term, status}) => {
    const date = term?.split('-')
    const dateBR = date !== undefined && `${date[2]}/${date[1]}/${date[0]}`

    const calculate = Math.ceil(
        (new Date(term).getTime() - new Date) / 1000 / 60 / 60 / 24)
    const statusText = (item) => {
        if(item > 0){
            return 'Faltam '
        } else if (item < 0){
            return 'Vencida há '
        } else if (item === 0){
            return 'Vence hoje'
        }
    }
    const statusFalse = status !== 'Realizado' 
    return(
        <View style={styles(statusFalse).container}
        >
            {statusFalse && <View style={styles(statusFalse).termBlock}>
                <Time /><Text  style={styles(statusFalse).termDate}>Prazo {dateBR}</Text>
            </View>}
            {statusFalse
            ? <Text style={styles(statusFalse).daysText}>
                {statusText(calculate)}
                {calculate !== 0 && Math.abs(calculate)}
                {calculate !== 0 && ' dias'}
              </Text> 
            : <Text style={styles(statusFalse).termMessage}>Concluída</Text> }
        </View> 
    )
}

const styles = (statusFalse: any) => StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: statusFalse ? 'space-between' : 'flex-end',
        marginTop: 4, 
        paddingTop: 4, 
        borderTopWidth: 1, 
        borderTopColor: '#E9E9E9'
        },
    termBlock: {
        flexDirection: 'row'
    },
    termDate: {
        color: '#626060', 
        marginLeft: 5, 
        fontSize: 12,
        fontWeight: '300'
    },
    daysText: {
        color: '#626060', 
        fontSize: 12,
        fontWeight: '300'
    },
    termMessage: {
        color: '#626060', 
        fontSize: 12, 
        alignSelf: 'flex-end',
        fontWeight: '300'
    }
})