import { createContext, useEffect } from "react"
import { useGetData } from "../hooks/useGetData"
import { useUserData } from "../hooks/useUserData"
import database from '@react-native-firebase/database'
import { useGetOnData } from "../hooks/useGetOnData"

export const AuthContext = createContext({})

export const AuthProvider = ({children}: any) => {
    const [ user ] = useUserData()

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )

}