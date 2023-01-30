import { Text, View } from "react-native"

export const SubtitleModalize = ({txt}) => {
    return(
            <Text style={{
                color:'#899499', 
                fontWeight: '300',
                fontSize: 16,
                paddingBottom: 10
            }}>{txt}</Text>
    )
}