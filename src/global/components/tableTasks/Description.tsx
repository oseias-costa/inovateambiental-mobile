import { StyleSheet, Text, View } from "react-native/"

export const Description = ({content, text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.descrition}>{text}</Text>
            <Text numberOfLines={1} style={styles.textContent}> - {content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        paddingTop: 0
    },
    descrition : {
        paddingRight: 5, 
        color: '#626060', 
        fontWeight: '600'
    },
    textContent: {
        color: '#626060', 
        flex: 1,
        fontWeight: '400'
    }
    

})