import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type HeadModalizeProps = {
    text: string
}

export const HeadModalize = ({ text }: HeadModalizeProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#626060',
        marginLeft: 10
    },
    cleanFilters: {
        color:'#5686E1', 
        fontWeight: '600',
        fontSize: 14,
        paddingBottom: 0,
        position: 'absolute',
        right: 20,
        top: 3
    }
})