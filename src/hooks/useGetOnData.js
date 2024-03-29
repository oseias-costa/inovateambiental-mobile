import database from "@react-native-firebase/database"
import { useCallback, useEffect, useState } from "react"

export const useGetOnData = (db) => {
     const [ list, setList ] = useState([]) 
     const [ loading, setLoading ] = useState(true)
  
      useEffect(() => {
        getData(db)
      }, [db])

      const getData = (db) => {
          const lista = []
        database().ref(db).on('value', snapshot => {
          let list = []
          const response = JSON.parse(JSON.stringify(snapshot))
        for(snap in response){
          let objData = {collection: db}
          for(itens in response[snap]){
            objData = {...objData, [itens] : response[snap][itens]}
          }
          list.push(objData)
        }
        setList(list)
        setLoading(false)
      })
    }
    console.log('renderizou')
      return [list, loading, setLoading]
}