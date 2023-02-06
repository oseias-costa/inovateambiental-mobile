import { View, Text, StyleSheet } from "react-native/"

export const CompanieRow = ({company, responsible}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.companieText}>{company}</Text>
            <Text style={styles.respText}>{responsible?.split(' ')[0]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        marginBottom: 3
    },
    companieText: {
        fontSize: 14, 
        fontWeight: 'bold', 
        color: '#414141'
    },
    respText: {
        color: '#B9B7B7',
        fontSize: 13
    }
})