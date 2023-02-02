import { View, Text, StyleSheet } from "react-native"

export const SubtitleEdit = ({icon, label}) => {
    return(
        <View style={styles.container}>
            {icon}
            <Text style={styles.subtitle}>{label}</Text>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 6,
        marginBottom: 3
    },
    subtitle: { 
        fontSize: 16, 
        paddingBottom: 0,
        paddingLeft: 8,
        color: '#626060', 
        fontWeight: '500',
        fontSize: 14,
        position: 'relative',
        top: 1
        }
})