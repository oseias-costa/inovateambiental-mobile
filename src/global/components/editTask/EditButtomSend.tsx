import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const EditButtomSend = ({onPress, label}) => {
  return(
    <TouchableOpacity style={styles.buttom} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttom: {
    height: 37,
    backgroundColor: '#5686E1',
    borderColor: '#5686E1',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 5,
    paddingTop: 6,
    borderRadius: 7,
    marginTop: 10,
    marginHorizontal: 12,
  },
  text: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'relative',
    top: 1
  }
})
