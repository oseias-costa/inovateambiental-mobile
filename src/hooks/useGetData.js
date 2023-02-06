import database from "@react-native-firebase/database"
import { useEffect, useState } from "react"

export const useGetData = (db) => {
      const [data, setData] = useState()

      useEffect(() => {
        const userLogged = database().ref(db).once('value', snapshot => {
        let list = []
        const response = JSON.parse(JSON.stringify(snapshot))
        for(snap in response){
          let objData = { collection: db }
          for(itens in response[snap]){
            objData = {...objData, [itens] : response[snap][itens]}
          }
          list.push(objData)
        }  
        setData(list)
      }).catch(error => console.log(error))}, [])
      
      return [data]
}