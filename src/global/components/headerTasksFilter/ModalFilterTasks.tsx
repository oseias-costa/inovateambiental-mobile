import { Modalize } from "react-native-modalize"
import { Dimensions, StyleSheet } from "react-native"
import { HeaderModalize } from "./HeaderModalize"
import { SelectListFilter } from "./SelectListFilter"
import { StatusFilter } from "./StatusFilter"
import { YearFilter } from "./YearFilter"
import { CalendarEdit }  from "../../icons/CalendarEdit"
import { FactoryIcon } from "../../icons/FactoryIcon"
import { ProfileIcon } from "../../icons/ProfileIcon"
import { ScrollView } from "react-native-gesture-handler"
const { width, height } = Dimensions.get('screen')

export const ModalFilterTasks = ({
    modalizeRef, filterActiv, filtered, setFiltered, data}) => {     
    
    return(
        <Modalize
                ref={modalizeRef}
                HeaderComponent={<HeaderModalize text='Filtros' setFiltered={setFiltered} />}
                modalHeight={height / 1.55}
                snapPoint={height / 2}
            >
            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                {/* <FiltersActive filterActiv={filterActiv} setFiltered={setFiltered}/> */}
                <SelectListFilter 
                    filtered={filtered} setFiltered={setFiltered} 
                    setFilteredName='companie' data={data} 
                    placeholder='Empresa' valueFilter='empresa' 
                    search={false} Icon={<FactoryIcon />} 
                />
                <SelectListFilter 
                    filtered={filtered} setFiltered={setFiltered}
                    setFilteredName='responsible' valueFilter='responsavel'
                    data={data} placeholder='Responsável' 
                    search={false} Icon={<ProfileIcon size='22' color='#706D6D' />}
                />
                <StatusFilter  filtered={filtered} setFiltered={setFiltered}/>

                <SelectListFilter 
                    filtered={filtered} setFiltered={setFiltered}
                    data={data} placeholder='Mês' 
                    valueFilter='mes' setFilteredName='month' 
                    search={false} Icon={<CalendarEdit />}  
                />
                <YearFilter  filtered={filtered} setFiltered={setFiltered}/>

            </ScrollView>
        </Modalize>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5
    }
})