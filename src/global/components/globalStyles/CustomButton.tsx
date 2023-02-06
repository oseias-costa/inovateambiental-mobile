import { ScrollView, View, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

type CustomButtonProps = {
  onPress: (event: GestureResponderEvent) => void
  label: string,
  active: boolean
}

export const CustomButton = ({onPress, label, active} : CustomButtonProps) => {
  return(
    <TouchableOpacity style={styles(active).buttom} onPress={onPress}>
      <Text style={styles(active).text}>{label}</Text>
    </TouchableOpacity>
  )
} 
const styles = (active) => StyleSheet.create({
  buttom: {
    height: 37,
    backgroundColor: active ? '#0071E3' : '#fff',
    borderColor: active ? '#0071E3' : '#C7BCBC',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 5,
    paddingTop: 6,
    borderRadius: 7,
    marginTop: 10,
    marginHorizontal: 12
  },
  text: {
    alignSelf: 'center',
    color: active ? '#fff' : '#626060',
    fontWeight: '600',
    fontSize: 16,
    position: 'relative',
    top: 1
  }
})