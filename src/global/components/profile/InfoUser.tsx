import { View, Text, StyleSheet } from "react-native"

export const InfoUser = ({user}) => {
    console.log(user)
    return(
        <View style={styles.container}>
            {user && 
            <>
                <Text style={styles.name}>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center'
    },
    name: {
        fontSize: 17,
        color: '#414141'
    },
    email: {
        fontSize: 12,
        color: '#414141',
        fontWeight: '300'
    }
})