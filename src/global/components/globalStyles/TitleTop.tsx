import { View, Text, StyleSheet } from 'react-native'
import {Svg, Path} from 'react-native-svg'

export const TitleTop = ({title}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <CloseIcon />
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItens: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  text: {
    color: '#626060',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

const CloseIcon = () => {
  return(
    <Svg width="24" height="24" fill="#5686E1" viewBox="0 0 24 24">
  <Path fillRule="evenodd" d="M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z" clipRule="evenodd"></Path>
  <Path fillRule="evenodd" d="M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z" clipRule="evenodd"></Path>
</Svg>
  )
}