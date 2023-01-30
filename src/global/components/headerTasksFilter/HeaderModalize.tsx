import { Text, View } from "react-native"

export const HeaderModalize = ({Icon, text}) => {
    return(
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 15}}>
            <Icon px='32' fill='#414141' />
            <Text style={{
                fontSize: 28, 
                fontWeight: 'bold', 
                color: '#414141',
                marginLeft: 10
            }}>{text}</Text>
        </View>
    )
}