import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const EditButtom = ({onPress, label, colorText}) => {
  return(
    <TouchableOpacity style={styles(this.props).buttom} onPress={onPress}>
      <Text style={styles(colorText).text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = (colorText) => StyleSheet.create({
  buttom: {
    height: 37,
    backgroundColor: '#d9d9d9',
    borderColor: '#C8BFBF',
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
    color: colorText ? '#FF4C4C' : '#626060',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'relative',
    top: 1
  }
})


// shadowColor: "#00264b",
// shadowOffset: {
//   width: 0,
//   height: 3,
// },
// shadowOpacity:  0.17,
// shadowRadius: 3.05,
// elevation: 4
// },