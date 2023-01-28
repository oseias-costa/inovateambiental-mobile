import { StyleSheet, Text } from "react-native/"

export const Welcome = ({user}) => {
    return(
        <Text style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 22}}>
        <Text style={styles.welcome}>Bem vindo,</Text>
        <Text style={styles.name}> {user?.split(' ')[0]}.</Text>
      </Text>
    )
}

const styles = StyleSheet.create({
    welcome: {
        color: '#B9B7B7',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 5
    },
    name: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700'
    }
})