import { Text, View } from "react-native/"
import { CircleStatus } from "../../icons/CircleStatus"

export const Status = ({ content }) => {
    const status = {
        Realizado: { fill: '#78A55A' },
        Parcial: { fill: '#F8BB00' },
        Pendente: { fill: '#FF4C4C' }
    }
        const color = status[content]?.fill
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 5}}>
            <CircleStatus fill={color} />
            <Text style={{color: color, marginLeft: 5}}>{content}</Text>    
        </View>
    )
}