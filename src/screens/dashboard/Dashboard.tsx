import { useContext } from "react"
import { SafeAreaView } from "react-native"
import { Text } from "react-native/"
import { AuthContext } from "../../context/Context"

export const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return(
        <SafeAreaView>
            <Text>Dashboard</Text>
            <Text>Bem vindo {user?.nome} </Text> 
            <Text></Text>
        </SafeAreaView>
    )
}