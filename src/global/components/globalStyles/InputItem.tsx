import { View, StyleSheet, TextInput } from 'react-native';

export const InputItem = ({ content, onChangeText}) => {
    return(
      <>
      <View style={styles.container}>
        <TextInput editable multiline 
          onChangeText={onChangeText}
          style={styles.input}
        >{content}</TextInput>
      </View>
      </>
    )
  }

const styles = StyleSheet.create({
  input: {
    fontSize: 14, 
    color: '#48494B', 
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 7,
    paddingLeft: 20,
    paddingRight: 5,
    paddingBottom: 7, 
    paddingTop: 8, 
  },
  container: { 
    marginBottom: 10, 
    marginTop: 5 
  }
})