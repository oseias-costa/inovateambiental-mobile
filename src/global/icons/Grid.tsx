import { Path, Svg } from "react-native-svg"

export const Grid = ({size, color}) => {
    return(
        <Svg width={size} height={size} fill={color} viewBox="0 0 24 24">
            <Path d="M9.563 11.25H3.186A1.687 1.687 0 0 1 1.5 9.562V3.189A1.687 1.687 0 0 1 3.188 1.5h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374a1.687 1.687 0 0 1-1.688 1.688Z"></Path>
            <Path d="M20.813 11.25h-6.375a1.687 1.687 0 0 1-1.688-1.688V3.189A1.687 1.687 0 0 1 14.438 1.5h6.374A1.687 1.687 0 0 1 22.5 3.188v6.374a1.687 1.687 0 0 1-1.688 1.688Z"></Path>
            <Path d="M9.563 22.5H3.186A1.687 1.687 0 0 1 1.5 20.812v-6.375a1.687 1.687 0 0 1 1.688-1.687h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374A1.687 1.687 0 0 1 9.562 22.5Z"></Path>
            <Path d="M20.813 22.5h-6.375a1.687 1.687 0 0 1-1.688-1.688v-6.375a1.687 1.687 0 0 1 1.688-1.687h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374a1.687 1.687 0 0 1-1.688 1.688Z"></Path>
        </Svg>
    )
}