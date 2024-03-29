import { StyleSheet, Text, View } from "react-native/"
import { CircleStatus } from "../../icons/CircleStatus"

export const Status = ({ content }) => {
    const status = {
        Realizado: { fill: '#78A55A' },
        Parcial: { fill: '#F8BB00' },
        Pendente: { fill: '#FF4C4C' }
    }
        const color = status[content]?.fill
    return(
        <View style={styles().container}>
            <CircleStatus size='12' fill={color} />
            <Text style={styles(color).statusText}>{content}</Text>    
        </View>
    )
}

const styles = (color) => StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingBottom: 0
    },
    statusText: {
        color: color, 
        marginLeft: 5, fontWeight: '500'
    }
})