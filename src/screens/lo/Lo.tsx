import { useEffect, useRef, useState } from "react"
import { FilterButtom } from "../../global/components/headerTasksFilter/FilterButton"
import { TableTaks } from "../../global/components/tableTasks/TableTasks"
import { ModalFilterTasks } from "../../global/components/headerTasksFilter/ModalFilterTasks"
import { Loading } from "../../global/components/globalStyles/Loading"
import { gql, useQuery } from "@apollo/client"

export const Lo = ({ navigation }) => {
    const [ filtered, setFiltered ] = useState({
        status: '', companie: '', responsible: '',
        month: '', year: new Date().getFullYear() })
    const modalizeRef = useRef(null)
    const filterActiv = [ 
        filtered.status, filtered.companie, filtered.responsible, 
        filtered.month, filtered.year]
    const [ page, setPage ] = useState(1)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <FilterButtom onPress={() => modalizeRef.current?.open()} />)
        })
    },[navigation])

    const GET_LOS = gql`
        query LoList($page: Int, $status: String){
            los(page: $page, status: $status){
                atividade
                empresa
                prazo
                realizado
                responsavel
                situacao
            }
            loItemsFilter {
                year
                responsible
                key
                company
                month
            }
        }
    `

    const {loading, data } = useQuery(GET_LOS, {
        variables: { page }
    })
    const getData =  data ? JSON.parse(JSON.stringify(data)) : []

    const list = (value: String) => {
        const arr = getData.loItemsFilter?.filter(item  => item[value] !== null)
        const newArr = arr?.map((item, index)=>{
            return { key: index, value: item[value] }
        })
        return newArr
    }
    console.log(list('year'))

    return(
        <>
            <ModalFilterTasks modalizeRef={modalizeRef} 
                filterActiv={filterActiv} 
                filtered={filtered} 
                setFiltered={setFiltered}
                data={getData.loItemsFilter}
            />
            { page === 1 && 
                <Loading visible={loading} /> 
            }
            <TableTaks data={getData.los} page={page} setPage={setPage} /> 
        </>
    )
}

