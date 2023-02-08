import { G, Path, Svg } from "react-native-svg"
import { View, Text, StyleSheet } from "react-native"

type ExpiredProps = {
    size?: string,
    color?: string,
    number?: number
}

export const Expired = ({size, color, number}: ExpiredProps) => {
    return(
        <>
        { number && <View style={styles.number}>
            <Text style={styles.numberText}>{number}</Text>
        </View>}
        <Svg 
            width={ size? size : "96.000000pt"} 
            height={ size? size : "96.000000pt"} 
            viewBox="0 0 96.000000 96.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <G transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
            fill={ color ? color : "#000000"} stroke="none">
            <Path d="M386 870 c-63 -16 -153 -70 -197 -117 -22 -24 -55 -74 -72 -111 -29
            -61 -32 -76 -32 -163 0 -90 2 -99 37 -171 24 -47 55 -91 84 -117 49 -46 162
            -105 190 -99 10 2 59 78 120 188 57 101 115 196 129 210 20 20 35 25 74 25 56
            0 79 -16 119 -84 25 -43 26 -43 35 -20 5 13 7 57 4 98 -15 200 -175 357 -375
            367 -42 2 -94 -1 -116 -6z m134 -278 l0 -127 -85 -85 -85 -85 -27 28 -28 27
            73 73 72 72 0 113 0 112 40 0 40 0 0 -128z"/>
            <Path d="M693 428 c-23 -29 -213 -378 -213 -390 0 -35 21 -38 240 -38 221 0
            241 3 240 39 -1 9 -49 102 -108 206 -108 191 -131 218 -159 183z m67 -188 l0
            -80 -40 0 -40 0 0 80 0 80 40 0 40 0 0 -80z m0 -160 l0 -40 -40 0 -40 0 0 40
            0 40 40 0 40 0 0 -40z"/>
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
        right: 0
    },
    numberText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})