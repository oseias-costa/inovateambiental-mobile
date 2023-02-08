import { G, Path, Svg } from "react-native-svg"
import { View, Text, StyleSheet } from "react-native"

type ParcialIconProps = {
    size?: number,
    color?: string,
    number?: number
}

export const ParcialIcon = ({size, color, number}: ParcialIconProps) => {
    return(
        <>
       { number && <View style={styles.number}>
            <Text style={styles.numberText}>{number}</Text>
        </View>}
        <Svg 
            width={ size ? size * 0.78 : "96.000000pt"} 
            height={size ? size : "122.000000pt"}
            viewBox="0 0 96.000000 122.000000"
        >
            <G transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)"
            fill={ color ? color : "#000000"} stroke="none">
            <Path d="M409 1180 l-38 -40 -165 0 -165 0 -20 -26 c-21 -26 -21 -36 -21 -541
            l0 -514 25 -24 24 -25 431 0 431 0 24 25 25 24 0 514 c0 505 0 515 -21 541
            l-20 26 -165 0 -165 0 -38 40 c-29 31 -45 40 -71 40 -26 0 -42 -9 -71 -40z
            m112 -30 c4 -8 10 -23 13 -32 4 -15 17 -18 66 -18 l60 0 0 -40 0 -40 -180 0
            -180 0 0 40 0 39 62 3 c54 3 63 6 66 23 2 11 9 26 15 33 13 17 68 11 78 -8z
            m259 -380 c0 -25 -95 -169 -117 -177 -9 -4 -33 12 -64 43 -46 46 -48 51 -35
            69 14 19 16 19 50 -14 20 -19 37 -33 39 -30 2 2 23 32 46 67 43 64 81 84 81
            42z m-305 -80 l0 -25 -143 -3 c-120 -2 -143 0 -148 13 -4 8 -4 22 0 30 5 13
            28 15 148 13 l143 -3 0 -25z m150 -260 l31 -30 29 30 c31 33 62 39 72 14 3 -9
            -7 -28 -28 -50 l-33 -34 33 -34 c21 -22 31 -41 28 -50 -9 -24 -33 -19 -70 14
            l-34 29 -28 -29 c-55 -58 -96 -25 -44 35 l31 35 -31 35 c-53 60 -14 91 44 35z
            m-147 -64 c2 -10 -2 -22 -10 -27 -15 -10 -248 -12 -272 -3 -16 6 -22 35 -9 48
            4 3 70 5 147 4 129 -3 141 -5 144 -22z"/>
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