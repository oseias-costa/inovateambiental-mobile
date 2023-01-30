import { useEffect, useRef, useState } from "react"
import { FilterButtom } from "../../global/components/headerTasksFilter/FilterButton"
import { TableTaks } from "../../global/components/tableTasks/TableTasks"
import { useGetOnData } from "../../hooks/useGetOnData"
import { currentMonth, filterList } from "./components/utilsTasks"
import { ModalFilterTasks } from "../../global/components/headerTasksFilter/ModalFilterTasks"

export const Tasks = ({ navigation }) => {
    const [ list ] = useGetOnData('atividades')
    const [ loading, setLoading ] = useState(true)
    const [ filtered, setFiltered ] = useState({
        status: '', companie: '', responsible: '',
        month: '', year: new Date().getFullYear() })
    const modalizeRef = useRef(null)
    const filterActiv = [ 
        filtered.status, filtered.companie, filtered.responsible, 
        filtered.month, filtered.year]
        
    useEffect(() => {
        if(list !== undefined){
            setLoading(false) 
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
                data={filterList(list, filtered)}
                />
            { loading ? null : 
            <TableTaks data={filterList(list, filtered)} />
            }
        </>
    )
}