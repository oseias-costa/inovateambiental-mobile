import { Text, View } from "react-native/"
import { useUserData } from "../../hooks/useUserData"

export const Dashboard = () => {
    const [ user ] = useUserData('')
      console.log(user?.id)
    return(
        <View>
            <Text>Dashboard</Text>
            <Text>Bem vindo {user?.email}</Text>
            <Text></Text>
        </View>
    )
}