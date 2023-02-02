import {Svg, Path, Defs, Pattern, Use, Image} from 'react-native-svg'

export const FactoryIcon = ({size, color}) => {
    return (
      <Svg
        width={size ? size : "24"}
        height={size ? size : "24"}
        fill={color ? color : "#414141"}
        viewBox="0 0 24 24"
      >
          <Path fill="url(#pattern0)" d="M0 0H24V24H0z"></Path>
      <Defs>
        <Pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <Use transform="scale(.04167)" xlinkHref="#image0_40_59"></Use>
        </Pattern>
        <Image
          id="image0_40_59"
          width="24"
          height="24"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVR4nGNgGPEgKSHhPzoeWhYMfZA0KOMgNDSUMykhYWZiYqIWPjGyLIiPj9dIio+/BFKYGB/fgEuMLAuS4uMTkhISvsAVx8dfxSZGvgVYFCeRgQfeAgYq8QfOgqTROMAFRuMgabTCYSADAAAKJ69PsCH3UQAAAABJRU5ErkJggg=="
        ></Image>
      </Defs>
    </Svg>
    );
  }