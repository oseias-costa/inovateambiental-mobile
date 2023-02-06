import { useContext, useEffect, useRef, useState } from "react"
import { FilterButtom } from "../../global/components/headerTasksFilter/FilterButton"
import { TableTaks } from "../../global/components/tableTasks/TableTasks"
import { ModalFilterTasks } from "../../global/components/headerTasksFilter/ModalFilterTasks"
import { useGetOnData } from "../../hooks/useGetOnData"
import { Loading } from "../../global/components/globalStyles/Loading"
import { filterList, filterListFunction } from "../../global/utils/filterList"
import { AuthContext } from "../../context/Context"

export const Tasks = ({ navigation }) => {
    const { teste } = useContext(AuthContext)
    // const [ list, loading, setLoading ] = useGetOnData('atividades')
    const [ filtered, setFiltered ] = useState({
        status: '', companie: '', responsible: '',
        month: '', year: new Date().getFullYear() })
    const modalizeRef = useRef(null)
    const filterActiv = [ 
        filtered.status, filtered.companie, filtered.responsible, 
        filtered.month, filtered.year]

    useEffect(() => {
        if(teste !== undefined){
            null
        }
        navigation.setOptions({
            headerRight: () => (
                <FilterButtom onPress={() => modalizeRef.current?.open()} />)
        })
    },[navigation])
    return(
        <>
            <ModalFilterTasks modalizeRef={modalizeRef} 
                filterActiv={filterActiv} 
                filtered={filtered} 
                setFiltered={setFiltered} 
                data={filterList(teste, filtered)}
            />
            <Loading visible={false} /> 
            <TableTaks data={filterList(teste, filtered)} /> 
        </>
    )
}

