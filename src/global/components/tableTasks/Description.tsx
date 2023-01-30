import { Text, View } from "react-native/"

export const Description = ({content, text}) => {
    return(
        <View style={{flexDirection: 'row', paddingTop: 4}}>
            <Text style={{paddingRight: 5, color: '#626060', fontWeight: '700'}}>{text}:</Text>
            <Text numberOfLines={1} style={{color: '#626060', flex: 1}}>{content}</Text>
        </View>
    )
}