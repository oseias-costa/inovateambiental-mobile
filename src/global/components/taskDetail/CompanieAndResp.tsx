import { View, Text } from "react-native"

export const CompanieAndResp = ({company, responsible}) => {
    return(
        <View style={{justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10}}>
            <Text style={{
                fontSize: 20, fontWeight: 'bold', color: '#414141'
                }}>{company}</Text>
            <Text style={{
              color: '#00264b',
              marginTop: 4,
              fontWeight: '300'
            }}>{responsible}</Text>
        </View>
    )
}