import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { FilterSelected } from "./FilterSelected"
import { SubtitleModalize } from "./SubtitleModalize"

export const FiltersActive = ({filterActiv, setFiltered}) => {
    return(
        <View style={styles.containerActive}>
            <View style={styles.containerTop}>
                <SubtitleModalize txt='Filtros Ativos' />
                <TouchableOpacity onPress={() => setFiltered({
                    status: '', companie: '', responsible: '',
                    month: '', year: new Date().getFullYear() })}>
                    <Text style={styles.cleanFilters}>Limpar Filtros</Text>
                </TouchableOpacity>
            </View>    
            <View style={styles.containerFilters}>
                {filterActiv.map((item, index) => {
                    if(item !== '') 
                    return <FilterSelected item={item} index={index} />
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerActive: {
        borderColor: '#D4D4D4',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 10,
        padding: 20
    },
    containerFilters: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cleanFilters: {
        color:'#11538C', 
        fontWeight: '300',
        fontSize: 16,
        paddingBottom: 10
    },
    containerTop: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})