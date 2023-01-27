import { useContext } from "react"
import { Text, View } from "react-native/"
import { AuthContext } from "../../context/Context"

export const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return(
        <View>
            <Text>Dashboard</Text>
            <Text>Bem vindo {user?.nome} </Text> 
            <Text></Text>
        </View>
    )
}