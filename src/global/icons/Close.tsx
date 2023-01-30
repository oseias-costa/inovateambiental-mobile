import { Svg, Path } from "react-native-svg"

export const Close = ({px, fill}) => {
    return(
        <Svg width={px} height={px} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></Path>
        </Svg>
    )
}