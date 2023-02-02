import {Svg, Path, Defs, Pattern, Use, Image} from 'react-native-svg'

export const CnpjIcon = ({size, color}) => {
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
            <Use transform="scale(.04167)" xlinkHref="#image0_37_53"></Use>
          </Pattern>
          <Image
            id="image0_37_53"
            width="24"
            height="24"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVR4nGNgGAWkgOT4eI/E+PjHSQkJ/8nC8fGPQGbgtACkgGzDExCW4LaAUsMTIHjgLWAgEySNPAuScPBxhfngs4BUMPgsSBqNg2EYyfE0Lq6T4+M9KLIknkCFMwoYsAAAVMCMdE112EMAAAAASUVORK5CYII="
          ></Image>
        </Defs>
      </Svg>
    );
  }