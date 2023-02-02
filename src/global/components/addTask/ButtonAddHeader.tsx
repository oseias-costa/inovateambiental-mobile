import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { AddIcon } from "../../icons/AddIcon"

export const ButtonAddHeader = ({path}) => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigation.push(path)}>
            <View style={styles.container}>
                <AddIcon size='36' color='#fff'/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        paddingBottom: 6
    }
})