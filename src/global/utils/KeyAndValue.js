

export const KeyAndValue = (data, valueFilter) => {
    let itensData = []
    const findData = (val) => itensData.find(item => item.value === val)
    
    const filterArr = data?.map((item, index) => {
        findData(item[valueFilter]) === undefined ? 
        itensData.push({key: index, value: item[valueFilter]}) : null
    })

    itensData?.sort((a, b) => a.value < b.value ? -1 : true)
    return itensData
}