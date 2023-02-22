import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { View, StyleSheet, Text } from 'react-native'

export const SelectListFilter = ({Icon, setFiltered, filtered, data, 
    placeholder, valueFilter, search, setFilteredName}) => {
    
    let itensData: [] = []
    const findData = (val) => itensData.find(item => item.value === val)
    
    const filterArr = data?.map((item, index) => {
        findData(item[valueFilter]) === undefined ? 
        itensData.push({key: index, value: item[valueFilter]}) : null
    })

    itensData?.sort((a, b) => a.value < b.value ? -1 : true)
    const placeholdSelect = filtered[setFilteredName] ? filtered[setFilteredName] : false

    return( 
        <View style={styles.container}>
            <Text style={styles.subtitle}>{placeholder}</Text>
            <SelectList setSelected={val => setFiltered({...filtered, [setFilteredName]: val})}
                data={data}
                save='value'
                search={search}
                placeholder={<PlaceholderList title={placeholdSelect || placeholder} Icon={Icon} />}
                boxStyles={{paddingBottom: 4, paddingTop: 5, paddingLeft: 10, borderColor: '#C7BCBC'}}
                dropdownTextStyles={{fontSize: 15, color: '#48494B', fontWeight: '400'}}
                inputStyles={styles.textPlaceholder}
            />
        </View>
    )
}

const PlaceholderList = ({title, Icon}) =>{
    return(
        <View style={styles.place}>
            {Icon}
            <Text style={styles.textPlaceholder}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    place: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: { 
        fontSize: 14, 
        paddingBottom: 6,
        paddingLeft: 8,
        color: '#626060', 
        fontWeight: '700',
        },
    textPlaceholder:{
        fontSize: 15, 
        color: '#48494B', 
        fontWeight: '600',
        paddingLeft: 15
        }
})