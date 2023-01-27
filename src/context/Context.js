import { Text, View } from "react-native/"
import { useUserData } from "../../hooks/useUserData"
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import { useEffect, useState } from "react"

export const Context = () => {


    const user = auth().currentUser
    const [ users, setUsers ] = useState('')
    
    useEffect(() => {
        const essa = []
        const userLogged = database().ref(`/usuarios/`).once("value", snapshot => {
            const response = JSON.parse(JSON.stringify(snapshot))
          for(snap in response){
            essa.push({
                email: response[snap].email,
                id: response[snap].id,
                nome: response[snap].nome,
                senha: response[snap].senha,
                nivel: response[snap].nivel,
                image: response[snap].image
            })
          }  
         setUsers(essa)
        })
    },[])

        const usuario = users.filter(item => item.email.includes(user.email))

}