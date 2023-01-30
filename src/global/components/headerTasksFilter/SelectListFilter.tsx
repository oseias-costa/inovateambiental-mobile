import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, StyleSheet } from 'react-native'

export const SelectListFilter = ({item, setFiltered, filtered, data, 
    placeholder, valueFilter, search, setFilteredName}) => {
    
    let itensData = []
    const findData = (val) => itensData.find(item => item.value === val)
    
    const filterArr = data.map((item, index) => {
        findData(item[valueFilter]) === undefined ? 
        itensData.push({key: index, value: item[valueFilter]}) : null
    })
    
    return( 
        <View style={styles.container}>
            <SelectList setSelected={val => setFiltered({...filtered, [setFilteredName]: val})}
                data={itensData}
                save='value'
                search={search}
                placeholder={placeholder}
                inputStyles={{fontSize: 15, color: '#71797E', fontWeight: '500'}}
                dropdownTextStyles={{fontSize: 15, color: '#71797E'}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})