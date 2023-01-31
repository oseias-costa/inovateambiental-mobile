import { ScrollView, View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

export const InputEdit = ({label, content, onChangeText}) => {
    return(
      <>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 16, paddingBottom: 10,
            color: '#BDB7AB', fontWeight: '700'
          }}>{label}</Text>
        <TextInput editable multiline onChangeText={onChangeText}
          style={{fontSize: 16, color: '#48494B', fontWeight: '600'}}
        >{content}</TextInput>
      </View>
      </>
    )
  }