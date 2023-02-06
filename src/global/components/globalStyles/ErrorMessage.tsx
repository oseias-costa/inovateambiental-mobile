import { StyleSheet, Text, View } from "react-native"

type ErrorMessageProps = {
    err: string
}

export const ErrorMessage = ({err}: ErrorMessageProps) => {
    return(
        <View style={styles.container}>
            {err !== '' && <Text style={styles.textErr}>{err}</Text>}
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    textErr: {
        color: '#FF4C4C'
    }

})