import { View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export const SelectListEdit = ({label, data, placeholder, setState, state, propDb}) => {
    return(
        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 16, paddingBottom: 10,
            color: '#BDB7AB', fontWeight: '700'
          }}>{label}</Text>
          <SelectList data={data} save='value'
                  setSelected={val => setState({...state, [propDb]: val})}
                  search={false} placeholder={placeholder}
                  inputStyles={{fontSize: 15, color: '#48494B', fontWeight: '600'}}
                  dropdownTextStyles={{fontSize: 15, color: '#48494B', fontWeight: '600'}}
                  />
         </View>
    )
  }

 