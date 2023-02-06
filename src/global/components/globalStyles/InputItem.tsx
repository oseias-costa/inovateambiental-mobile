import { View, StyleSheet, TextInput } from 'react-native';

type InputItemProps = {
  content?: string,
  onChangeText: ((text: string) => void),
  placeholder?: string
}

export const InputItem = ({ content, onChangeText, placeholder}: InputItemProps) => {
    return(
      <>
      <View style={styles.container}>
        <TextInput editable multiline 
          placeholder={placeholder}
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
    paddingTop: 8
  },
  container: { 
    marginBottom: 10, 
    marginTop: 5 
  }
})