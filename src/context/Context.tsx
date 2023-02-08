import { createContext, useEffect, useState } from "react"
import { useGetOnData } from "../hooks/useGetOnData"
import { useUserData } from "../hooks/useUserData"

type AuthContextProps = {
    children: React.ReactNode
}

export const AuthContext = createContext({})

export const AuthProvider = ({children}: AuthContextProps) => {
    const [ user ] = useUserData() 
    
    const getData = (db) => {
        const [list] = useGetOnData(db)
        return list
    }
        const teste = getData('atividades')
        const loList = getData('lo')
        const companiesList = getData('empresas')
        
       return(
        <AuthContext.Provider value={{ user, teste, loList, companiesList }}>
            {children}
        </AuthContext.Provider>
    )

}