import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ButtonActiveAndDisable } from "./ButtonActiveAndDisable"

export const YearFilter = ({filtered, setFiltered}) => {
    const year = new Date().getFullYear()
    return(
        <View style={styles.container}>
            {[year - 1, year, year + 1].map(item => {
                return(
                    <ButtonActiveAndDisable
                        onPress={() => {
                            setFiltered({...filtered, year: item}) }}
                        label={item}
                        active={filtered?.year === item ? true : false }
                    />
                    )
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginBottom: 14
    },
    status: {
        flexDirection: 'row',
        padding: 18
    }
})