import { TouchableOpacity, Text } from "react-native"

export const FilterButtom = ({onPress}) => {
    return(
        <TouchableOpacity  onPress={onPress}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16, paddingRight: 20}}>Filtro</Text>
        </TouchableOpacity>
    )
}