import { View, Text, StyleSheet } from "react-native/"

type CompanieRow = {
    company: string
}

export const CompanieRow = ({company}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.companieText}>{company}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        marginBottom: 1
    },
    companieText: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#414141'
    },
    respText: {
        color: '#B9B7B7',
        fontSize: 14
    }
})