import { StyleProp, View } from "react-native";
import { Path, Svg } from "react-native-svg";

type LocalizationProps = {
    size? : number,
    color? : string
}

export const Localization = ({size, color, style}: LocalizationProps) => {
    return (
      <View style={style}>
      <Svg
        width={size ? size : 10}
        height={size ? size * 0.66 : 15}
        fill={color ? color : "#414141"}
        viewBox="0 0 10 15"
      >
        <Path
          fill="#626060"
          d="M5 0C2.236 0 0 2.236 0 5c0 3.75 5 9.286 5 9.286S10 8.75 10 5c0-2.764-2.236-5-5-5zm0 6.786a1.786 1.786 0 11.001-3.573A1.786 1.786 0 015 6.786z"
        ></Path>
      </Svg>
      </View>
    );
  }