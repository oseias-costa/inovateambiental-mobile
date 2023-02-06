import { StyleSheet, View, Text } from "react-native"

type CompanyCnpjProps = {
    cnpj: string
}

export const CompanyCnpj = ({cnpj}: CompanyCnpjProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.description}>CNPJ - {cnpj}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 3
    },
    description : {
        paddingRight: 5, 
        color: '#626060', 
        fontWeight: '600'
    }
})