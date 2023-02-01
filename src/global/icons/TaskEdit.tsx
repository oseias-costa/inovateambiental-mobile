import {Svg, Path} from 'react-native-svg'

export const TaskEdit = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill='#626060'
    >
      <Path
        d="M105 221c-6-5-23-11-40-13l-30-3V35h170v170l-30 3c-16 2-34 8-39 13-6 5-13 9-16 9s-10-4-15-9zm25-21c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm38-49c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm-22-12c7-12-44-69-63-69-21 0-15 22 14 52s38 34 49 17z"
        transform="matrix(.1 0 0 -.1 0 24)"
      ></Path>
    </Svg>
  );
}