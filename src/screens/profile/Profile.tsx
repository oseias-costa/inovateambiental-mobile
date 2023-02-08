import { useContext } from "react"
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native"
import { AuthContext } from "../../context/Context"
import { InfoUser } from "../../global/components/profile/InfoUser"
import { PendingTasksIcons } from "../../global/components/profile/PendingTasksIcons"
import { TopPefil } from "../../global/components/profile/TopPefil"

export const Profile = () => {
    const { user } = useContext(AuthContext)
 
    return(
        <>
        <SafeAreaView style={styles.status}>
            <StatusBar barStyle='light-content' />
            <TopPefil user={user}/>
        </SafeAreaView>
        <InfoUser user={user} />
        <PendingTasksIcons />
        </>
    )
}

const styles = StyleSheet.create({
    status: {
        backgroundColor: '#00264B'
    }
})