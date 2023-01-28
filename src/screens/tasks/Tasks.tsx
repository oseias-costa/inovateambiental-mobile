import { useEffect, useState } from "react"
import { Button, SafeAreaView, Text } from "react-native/"
import { TableTaks } from "../../global/components/tableTasks/TableTasks"
import { useGetOnData } from "../../hooks/useGetOnData"


export const Tasks = ({ navigation }) => {
    const [ list ] = useGetOnData('atividades')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        if(list !== undefined){
            setLoading(false)
        }
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => alert('this is sparta')} title='Filtro' color='#000' />
            )
        })
    },[navigation])


    return(
        <SafeAreaView>
            { loading ? null : 
            <TableTaks data={list} />
            }
        </SafeAreaView>
        
    )
}