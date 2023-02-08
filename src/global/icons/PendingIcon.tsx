import { G, Path, Svg } from "react-native-svg"
import { View, Text, StyleSheet } from "react-native"

type PendingIconProps = {
    size?: string,
    color?: string,
    number?: number,
}

export const PendingIcon = ({size, color, number}: PendingIconProps) => {
    return(
        <>
        { number && <View style={styles.number}>
            <Text style={styles.numberText}>{number}</Text>
        </View>}
        <Svg
            width={ size ? size : "96.000000pt"} 
            height={ size ? size : "96.000000pt"} 
            viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet"
        >

            <G transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={ color ? color : "#000000"} stroke="none">
            <Path d="M440 840 c0 -38 -2 -40 -42 -51 -110 -29 -197 -102 -245 -204 -24
            -51 -28 -73 -28 -145 0 -72 4 -94 28 -146 36 -77 104 -145 182 -181 51 -24 73
            -28 145 -28 72 0 94 4 146 28 77 36 145 104 181 182 24 51 28 73 28 145 0 72
            -4 94 -28 145 -47 101 -126 170 -231 200 -56 16 -56 17 -56 56 0 39 0 39 -40
            39 -40 0 -40 0 -40 -40z m80 -272 l0 -112 62 -63 62 -63 -27 -27 -27 -28 -75
            75 -75 74 0 128 0 128 40 0 40 0 0 -112z"/>
            </G>
        </Svg>
        </>
    )
}

const styles = StyleSheet.create({
    number: {
        position: 'absolute',
        backgroundColor: '#FF4C4C',
        paddingHorizontal: 5,
        paddingVertical: 2,
        zIndex: 2,
        borderRadius: 20,
        right: 6
    },
    numberText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})