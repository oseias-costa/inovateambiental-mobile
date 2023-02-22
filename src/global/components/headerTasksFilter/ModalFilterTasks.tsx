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
import { useState } from "react"
import { CustomButton } from "../globalStyles/CustomButton"
import { gql, useQuery } from "@apollo/client"
const { width, height } = Dimensions.get('screen')

export const ModalFilterTasks = ({
    modalizeRef, filterActiv, filtered, setFiltered, data}) => {     
    const [ filter, setFilter ] = useState(filtered)
    
    const list = (value: String) => {
        const arr = data?.filter(item  => item[value] !== null)
        const newArr = arr?.map((item, index)=>{
            return { key: index, value: item[value] }
        })
        return newArr
    }

    const year = list('year')
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
                    filtered={filter} setFiltered={setFilter} 
                    setFilteredName='companie' data={year} 
                    placeholder='Empresa' valueFilter='empresa' 
                    search={false} Icon={<FactoryIcon size='22' color='#706D6D' />} 
                />
                {/* <SelectListFilter 
                    filtered={filter} setFiltered={setFilter} 
                    setFilteredName='responsible' valueFilter='responsavel'
                    data={data} placeholder='Responsável' 
                    search={false} Icon={<ProfileIcon size='22' color='#706D6D' />}
                />
                <StatusFilter  filtered={filtered} setFiltered={setFiltered}/>

                <SelectListFilter 
                    filtered={filter} setFiltered={setFilter} 
                    data={data} placeholder='Mês' 
                    valueFilter='mes' setFilteredName='month' 
                    search={false} Icon={<CalendarEdit />}  
                />
                <YearFilter  filtered={filter} setFiltered={setFilter} />
                <CustomButton label="Filtrar" onPress={setFiltered(filter)} active={true} /> */}
            </ScrollView>
        </Modalize>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5
    }
})