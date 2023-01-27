import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import { useEffect, useState } from "react"

export const useUserData = () => {
    const logged = auth().currentUser
    const [ userList, setUserList ] = useState([])
    const [ user, setUser ] = useState('')

    useEffect(() => {
        const list = []
        const userLogged = database().ref(`/usuarios/`).once("value", snapshot => {
            const response = JSON.parse(JSON.stringify(snapshot))
          for(snap in response){
            list.push({
                email: response[snap].email,
                id: response[snap].id,
                nome: response[snap].nome,
                senha: response[snap].senha,
                nivel: response[snap].nivel,
                image: response[snap].image
            })
          }  
          setUserList(list)
        }).then(() =>  setUser(userList?.filter(item => item.email.includes(logged.email))))
        .catch(error => console.log(error))
    },[logged])

    return user
}