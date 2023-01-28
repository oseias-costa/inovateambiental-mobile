import { View, Text } from "react-native/"

export const CompanieRow = ({company, responsible}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10}}>
            <Text style={{
                fontSize: 20, fontWeight: 'bold', color: '#414141'
                }}>{company}</Text>
            <Text style={{color: '#B9B7B7'}}>{responsible?.split(' ')[0]}</Text>
        </View>
    )
}