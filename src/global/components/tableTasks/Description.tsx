import { Text, View } from "react-native/"

export const Description = ({content, text}) => {
    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={{paddingRight: 5, color: '#626060', fontWeight: '700'}}>{text}:</Text>
            <Text numberOfLines={1} style={{color: '#626060'}}>{content}</Text>
        </View>
    )
}