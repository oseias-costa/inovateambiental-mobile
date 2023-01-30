import { Svg, Path } from "react-native-svg"

export const Funnel = ({px, fill}) =>{
  return(
    <Svg width={px} height={px} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <Path d="M4.68 4.68a.6.6 0 0 1 .6-.6h14.4a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.154.4l-5.246 5.83v5.77a.6.6 0 0 1-.41.569l-3.6 1.2a.6.6 0 0 1-.79-.569v-6.97L4.833 7.48a.6.6 0 0 1-.153-.4v-2.4Z"></Path>    
    </Svg>
  )
}