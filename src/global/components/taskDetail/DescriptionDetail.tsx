import { Text, View } from "react-native"

export const DescriptionDetail = ({content, text}) => {
    return(
        <View style={{
          flexDirection: 'column', 
          paddingTop: 4
        }}>
            <Text style={{
              paddingRight: 5,
              paddingBottom: 3, 
              color: '#626060', 
              fontWeight: '700',
              fontSize: 16
            }}>{text}</Text>
            <Text style={{
              color: '#626060', 
              flex: 1,    
              marginBottom: 10,
              fontSize: 16
            }}>{content}</Text>
        </View>
    )
}