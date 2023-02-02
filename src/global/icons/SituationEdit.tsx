import {Svg, Path} from 'react-native-svg'

export const SituationEdit = ({size, color}) => {
  return (
   <Svg
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      fill={ color ? color : '#626060'}
    >
      <Path
        d="M105 221c-6-5-23-11-40-13l-30-3V35l33-3c30-3 32-1 32 28 0 41 39 80 80 80 29 0 31 2 28 33-3 27-7 32-33 35-16 2-34 8-39 13-6 5-13 9-16 9s-10-4-15-9zm25-21c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10z"
        transform="matrix(.1 0 0 -.1 0 24)"
      ></Path>
      <Path
        d="M157 113c-24-6-39-47-28-77 17-43 77-41 101 4 11 20-2 70-19 70-5 0-15 2-23 4-7 2-21 2-31-1zm53-28c26-32-13-81-47-59-23 14-28 41-13 59 16 19 44 19 60 0z"
        transform="matrix(.1 0 0 -.1 0 24)"
      ></Path>
      <Path
        d="M180 66c0-8 4-17 9-20 5-4 7 3 4 14-6 23-13 26-13 6z"
        transform="matrix(.1 0 0 -.1 0 24)"
      ></Path>
    </Svg>
  );
}