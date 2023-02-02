import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { CircleStatus } from '../../icons/CircleStatus';

export const StatusEdit = ({label, data, placeholder, setState, state, propDb}) => {
  const [color, setColor] = useState()
  const status = {
    Realizado: { fill: '#78A55A' },
    Parcial: { fill: '#F8BB00' },
    Pendente: { fill: '#FF4C4C' }
}
    useEffect(() => {
      setColor(status[placeholder]?.fill)
    }, [])
    
    return(
      <>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <CircleStatus fill={color} />
            <Text style={styles(color).labelText}>{label}</Text>    
        </View>
        <View style={styles(this.props).select}>
          <SelectList data={data} save='value'
                  setSelected={val => {
                    setState({...state, [propDb]: val})
                    setColor(status[val]?.fill)
                  }}
                  boxStyles={{borderColor: '#D9D9D9'}}
                  search={false} placeholder={placeholder}
                  boxStyles={styles().placeholderStyle}
                  inputStyles={styles().inputStyles}
                  dropdownStyles={styles().placeholderStyle}
                  dropdownTextStyles={styles().inputStyles}
                  />
         </View>
         </>
    )
  }

 const styles = (color) => StyleSheet.create({
    labelText: {
      color: color, 
      marginLeft: 5, 
      fontWeight: '500',
      fontSize: 14
      },
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