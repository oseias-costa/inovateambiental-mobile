import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
            <Text style={{
              color: color, 
              marginLeft: 5, 
              fontWeight: '800',
              fontSize: 16
              }}>{label}</Text>    
        </View>
        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <SelectList data={data} save='value'
                  setSelected={val => {
                    setState({...state, [propDb]: val})
                    setColor(status[val]?.fill)
                  }}
                  boxStyles={{borderColor: '#D9D9D9'}}
                  search={false} placeholder={placeholder}
                  inputStyles={{fontSize: 17, color: '#48494B', fontWeight: '400'}}
                  dropdownTextStyles={{fontSize: 17, color: '#48494B', fontWeight: '400'}}
                  />
         </View>
         </>
    )
  }

 