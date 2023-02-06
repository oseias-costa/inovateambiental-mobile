import { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

type SubtitleWithIconProps = {
    label: string,
    color?: any,
    icon: React.ReactNode
}

export const SubtitleWithIcon  = ({icon, label, color}: SubtitleWithIconProps) => {
    return(
        <View style={styles(color).container}>
            {icon}
            <Text style={styles(color).subtitle}>{label}</Text>
          </View>
    )
}

const styles = (color: string) => StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 6,
        marginBottom: 3
    },
    subtitle: { 
        paddingBottom: 0,
        paddingLeft: 8,
        color: color ? color : '#626060', 
        fontWeight: '500',
        fontSize: 14,
        position: 'relative',
        top: 1
        }
})