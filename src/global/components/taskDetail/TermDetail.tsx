import { View, Text } from "react-native"
import { Time } from "../../icons/Time"

export const TermDetail = ({term, status}) => {
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
        <View style={{
            flexDirection: 'row', 
            justifyContent: statusFalse ? 'space-between' : 'flex-end',
            marginTop: 7, paddingTop: 7, 
            borderTopWidth: 1, 
            borderTopColor: '#E9E9E9'
            }}
        >
            {statusFalse && <View style={{flexDirection: 'row'}}>
                <Time /><Text  style={{color: '#626060', marginLeft: 5, fontSize: 15}}>Prazo {dateBR}</Text>
            </View>}
            {statusFalse
            ? <Text style={{color: '#626060', fontSize: 15}}>
                {statusText(calculate)}
                {calculate !== 0 && Math.abs(calculate)}
                {calculate !== 0 && ' dias'}
              </Text> 
            : <Text style={{color: '#626060', fontSize: 15, alignSelf: 'flex-end'}}>Concluída</Text> }
        </View> 
    )
}