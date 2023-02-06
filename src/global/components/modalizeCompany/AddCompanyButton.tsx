import { useNavigation } from "@react-navigation/native"
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from "react-native"
import { AddIcon } from "../../icons/AddIcon"

type addCompanyProps = {
    onPress: (event: GestureResponderEvent) => void
}

export const AddCompanyButton = ({onPress}: addCompanyProps) => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={onPress}>
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