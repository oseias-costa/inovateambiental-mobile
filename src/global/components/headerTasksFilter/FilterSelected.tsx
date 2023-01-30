import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Hash } from "../../icons/Hash"

const filterDescr = ['status', 'companie', 'responsible', 'month', 'year']
export const FilterSelected = ({item, index}) => {
    return(
            // <TouchableOpacity
            //     onPress={() => {
            //         setFiltered({...filtered, [filterDescr[index]] : ''})}}>
            //    </TouchableOpacity> */}
                <View style={styles.filterSelected} >
                    <Hash fill='#fff' px='26' />
                    <Text style={{color: '#fff'}}>{item}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    filterSelected: {
        paddingBottom: 5,
        paddingTop: 6,
        paddingLeft: 4,
        paddingRight: 9,
        borderRadius: 8,
        backgroundColor: '#A9A9A9',
        margin: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})