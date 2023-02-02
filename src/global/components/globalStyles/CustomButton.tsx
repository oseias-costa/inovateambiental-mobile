import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const CustomButton = ({onPress, label, active}) => {
  return(
    <TouchableOpacity style={styles(active).buttom} onPress={onPress}>
      <Text style={styles(active).text}>{label}</Text>
    </TouchableOpacity>
  )
} 
const styles = (active) => StyleSheet.create({
  buttom: {
    height: 37,
    backgroundColor: active ? '#2573D9' : '#fff',
    borderColor: active ? '#2573D9' : '#C7BCBC',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 5,
    paddingTop: 6,
    borderRadius: 7,
    marginTop: 10
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