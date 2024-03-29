import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const ButtonActiveAndDisable = ({onPress, label, active}) => {
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
    paddingTop: 5,
    borderRadius: 7,
    marginTop: 10,
    marginHorizontal: 4,
  },
  text: {
    alignSelf: 'center',
    color: active ? '#fff' : '#626060',
    fontWeight: '500',
    fontSize: 15,
    position: 'relative',
    top: 2
  }
})