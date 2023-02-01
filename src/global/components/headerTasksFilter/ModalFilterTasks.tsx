import { Modalize } from "react-native-modalize"
import { Dimensions, ScrollView, StyleSheet } from "react-native"
import { HeaderModalize } from "./HeaderModalize"
import { Funnel } from "../../icons/Funnel"
import { FiltersActive } from "./FiltersActive"
import { SelectListFilter } from "./SelectListFilter"
import { StatusFilter } from "./StatusFilter"
import { YearFilter } from "./YearFilter"
import { CalendarEdit }  from "../../icons/CalendarEdit"
const { width, height } = Dimensions.get('screen')

export const ModalFilterTasks = ({
    modalizeRef, filterActiv, filtered, setFiltered, data}) => {     
       
    return(
        <Modalize
                ref={modalizeRef}
                HeaderComponent={<HeaderModalize text='Filtros'  setFiltered={setFiltered}/>}
                modalHeight={height / 1.55}
                snapPoint={height / 2}
            >
            <ScrollView>
                {/* <FiltersActive filterActiv={filterActiv} setFiltered={setFiltered}/> */}
                <SelectListFilter filtered={filtered} setFiltered={setFiltered} setFilteredName='companie'
                    data={data} placeholder='Empresa' valueFilter='empresa' search={false} Icon={<CalendarEdit />} />
                <SelectListFilter setFilteredName='responsible' filtered={filtered} setFiltered={setFiltered}
                    data={data} placeholder='Responsável' valueFilter='responsavel' search={false} />
                <StatusFilter  filtered={filtered} setFiltered={setFiltered}/>
                <SelectListFilter setFilteredName='month' filtered={filtered} setFiltered={setFiltered}
                    data={data} placeholder='Mês' valueFilter='mes' search={false} Icon={<CalendarEdit />}  />
                <YearFilter  filtered={filtered} setFiltered={setFiltered}/>
            </ScrollView>
        </Modalize>
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
})