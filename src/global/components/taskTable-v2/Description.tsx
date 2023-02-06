import { StyleSheet, Text, View } from "react-native/"

export const Description = ({content, text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.description}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    title: {
        paddingRight: 5, 
        color: '#626060', 
        fontWeight: '600',
        fontSize: 12
    },
    description: {
        color: '#626060', 
        flex: 1,
        fontSize: 12,
        fontWeight: '400'
    }

})