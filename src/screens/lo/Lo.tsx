import { useContext, useEffect, useRef, useState } from "react"
import { FilterButtom } from "../../global/components/headerTasksFilter/FilterButton"
import { TableTaks } from "../../global/components/tableTasks/TableTasks"
import { ModalFilterTasks } from "../../global/components/headerTasksFilter/ModalFilterTasks"
import { Loading } from "../../global/components/globalStyles/Loading"
import { filterList } from "../../global/utils/filterList"
import { AuthContext } from "../../context/Context"
import { gql, useQuery } from "@apollo/client"

export const Lo = ({ navigation }) => {
    const { loList } = useContext(AuthContext)
    const [ filtered, setFiltered ] = useState({
        status: '', companie: '', responsible: '',
        month: '', year: new Date().getFullYear() })
    const modalizeRef = useRef(null)
    const filterActiv = [ 
        filtered.status, filtered.companie, filtered.responsible, 
        filtered.month, filtered.year]

    useEffect(() => {
        if(loList !== undefined){
            null
        }
        navigation.setOptions({
            headerRight: () => (
                <FilterButtom onPress={() => modalizeRef.current?.open()} />)
        })
    },[navigation])

    const GET_LOS = gql`
        query {
            los(page: 1){
                atividade
                empresa
                prazo
                realizado
                responsavel
                situacao
              }
        }
    `
    const {loading, data } = useQuery(GET_LOS)
    const newData =  data ? JSON.parse(JSON.stringify(data)) : []
    return(
        <>
            <ModalFilterTasks modalizeRef={modalizeRef} 
                filterActiv={filterActiv} 
                filtered={filtered} 
                setFiltered={setFiltered} 
                data={filterList(loList, filtered)}
            />
            <Loading visible={loading} /> 
            <TableTaks data={newData.los} /> 
        </>
    )
}

