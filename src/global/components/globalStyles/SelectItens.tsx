import { StyleSheet, View } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"


export const SelectItens = ({placeholder, data}) => {
    return(
        <View style={styles.select}>
        <SelectList data={data} save='value'
                setSelected={val => console.log(val)}
                search={false} placeholder={placeholder}
                boxStyles={styles.placeholderStyle}
                inputStyles={styles.inputStyles}
                dropdownStyles={styles.placeholderStyle}
                dropdownTextStyles={styles.inputStyles}
                />
       </View>
    )
}

const styles = StyleSheet.create({
    select: {
      marginBottom: 10, 
      marginTop: 4 
    },
    placeholderStyle: {
      paddingBottom: 7, 
      paddingTop: 8, 
      borderColor: '#D9D9D9', 
      borderRadius: 7
    },
    inputStyles: {
      fontSize: 14, 
      color: '#48494B', 
      fontWeight: '400'
    }
 })