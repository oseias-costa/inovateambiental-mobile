import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const FilterButtom = ({onPress}) => {
    return(
        <TouchableOpacity  onPress={onPress}>
                <Text style={styles.text}>Filtro</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 15, 
        paddingRight: 20
    }
})