import database from "@react-native-firebase/database"
import { useCallback, useEffect, useState } from "react"

export const useGetDataFirst = (db) => {
     const [ list, setList ] = useState([]) 
  
      useEffect(() => {
        getData(db)
      }, [db])

      const getData = (db) => {
          const lista = []
        database().ref(db).limitToFirst(10).once('value', snapshot => {
          let list = []
          const response = JSON.parse(JSON.stringify(snapshot))
        for(snap in response){
          let objData = {}
          for(itens in response[snap]){
            objData = {...objData, [itens] : response[snap][itens]}
          }
          list.push(objData)
        }
        setList(list)
      })
    }
      return [list]
}