import database from "@react-native-firebase/database"
import { useEffect, useState } from "react"

export const useGetOnData = (db) => {
      const [onData, setOnData] = useState()

      useEffect(() => {
        const userLogged = database().ref(db).on('value', snapshot => {
        let list = []
        const response = JSON.parse(JSON.stringify(snapshot))
        for(snap in response){
          let objData = {}
          for(itens in response[snap]){
            objData = {...objData, [itens] : response[snap][itens]}
          }
          list.push(objData)
        }  
        setOnData(list)
      })}, [])
      
      return [onData]
}