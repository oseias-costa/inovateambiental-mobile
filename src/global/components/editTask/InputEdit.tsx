import { View, StyleSheet, TextInput } from 'react-native';

export const InputEdit = ({label, content, onChangeText}) => {
    return(
      <>
      <View style={{ marginBottom: 10, marginTop: 5 }}>
        <TextInput editable multiline onChangeText={onChangeText}
          style={styles.input}
        >{content}</TextInput>
      </View>
      </>
    )
  }

const styles = StyleSheet.create({
  input: {
    fontSize: 17, 
    color: '#48494B', 
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10
  }
})